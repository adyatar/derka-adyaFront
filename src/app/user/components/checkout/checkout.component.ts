import { Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/Security/auth.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../account/navbar/navbar.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Order } from '../../../models/order.model';
import { CheckoutService } from '../../../services/checkout.service';
import { CartItem } from '../../../models/cartItem.model';
import { OrderItem } from '../../../models/orderitem.model';
import { CartService } from '../../../services/cart.service';
import { GiftcardService } from '../../../services/giftcard.service';

@Component({
    selector: 'app-checkout',
    standalone: true,
    templateUrl: './checkout.component.html',
    styleUrl: './checkout.component.css',
    imports: [RouterModule, CommonModule, NavbarComponent,ReactiveFormsModule,FormsModule]
})
export class CheckoutComponent implements OnInit {
  isLoggedIn: boolean = false;
  cartItems!: any[];
  totalAmount!: number;
  subTotal!:number;
  loginForm?: any;
  loginError!: string;
  giftCardCode: string = '';
  errorMessage: string = '';

  constructor(
    private authService :AuthService,
    private fb: FormBuilder, 
    private router: Router,
    private checkoutService: CheckoutService,
    private cartService:CartService,
    private giftCardService:GiftcardService){}



  ngOnInit(): void {
    this.cartItems = this.getCartItems();
    this.subTotal = this.calculateSubTotal(this.cartItems); 
    this.totalAmount = this.calculateTotal();  
     
    this.authService.isAuthenticatedUser().subscribe(status => 
      this.isLoggedIn = status );
      this.initializeLoginForm();
  }

  private initializeLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email').value;
      const password = this.loginForm.get('password').value;

      this.authService.login(email, password).subscribe(success => {
        if (success) {
          this.cartItems = this.getCartItems(); 
          this.subTotal = this.calculateSubTotal(this.cartItems);
          this.totalAmount = this.calculateTotal();
          this.router.navigate(['checkout'])
        }
      });
    } else {
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        control.markAsTouched();
      });
    }
  }

    private getCartItems() {
      const userId = this.authService.getUserId();
      return JSON.parse(localStorage.getItem(`cart_${userId}`) || 'cart_0');
    }


    private calculateTotal(): number {
      let total = this.subTotal+5;
      return total;
    }

    private calculateSubTotal(items: any[]):number{
      let subTotal = 0;
      for (let item of items) {
        subTotal += (item.price * item.qte);
      }
      return subTotal;
    }


    onPlaceOrder(proceedWithOrder: boolean) {
      if (!proceedWithOrder) {
        this.errorMessage = 'Cannot place order: Invalid or insufficient gift card balance.';
        return;
      }
      const userId = this.authService.getUserId();
      const orderItems: OrderItem[] = this.cartItems.map(cartItem => ({
        qte: cartItem.qte,
        price: cartItem.price,
        productId: cartItem.productId || cartItem.product?.id,
      }));
      const order: Order = {
        orderItems: orderItems,
        userId: userId,
        totalPrice: this.calculateTotalPrice(orderItems),
        orderDate: new Date().toISOString()
      };
      this.checkoutService.placeOrder(order).subscribe({
          next: (orderResponse) => {
            this.cartService.clearCart();
            this.redirectToSuccess();
          },
          error: (error) => {
              console.error('Error placing order', error);   
          }
      });
  }

  clearCart() {
    const userId = this.authService.getUserId();
    localStorage.removeItem(`cart_${userId}`);
    this.cartService.clearCart();
  }

  redirectToSuccess() {
    this.router.navigate(['/payment-success']);
  }


  validateAndPlaceOrder() {
    const validationResult = this.giftCardService.validate(this.giftCardCode);
    if (validationResult.valid) {
      this.processPayment(validationResult.balance, this.totalAmount);
    } else {
      this.errorMessage = 'Invalid or expired gift card.';
    }
  }

  processPayment(balance: number, orderTotal: number) {
    if (balance >= orderTotal) {
      console.log('Processing payment with gift card.');
      this.onPlaceOrder(true); 
    } else {
      this.errorMessage = 'Insufficient balance on gift card.';
      this.onPlaceOrder(false);
    }
  }
  


  private calculateTotalPrice(orderItems: OrderItem[]): number {
    return orderItems.reduce((total, item) => total + (item.price * item.qte), 0);
  }

}
