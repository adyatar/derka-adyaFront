import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FeatureSectionComponent } from '../../shared/feature-section/feature-section.component';
import { ProductSectionComponent } from '../home/product-section/product-section.component';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { CartItem } from '../../../models/cartItem.model';
import { CartService } from '../../../services/cart.service';
import { AuthService } from '../../../services/Security/auth.service';
import { CheckoutService } from '../../../services/checkout.service';


@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    imports: [CommonModule, ProductSectionComponent, RouterModule, ProductCardComponent, SlickCarouselModule, FeatureSectionComponent]
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartProducts: Product[] = [];
  private userId = this.authService.getUserId();

constructor(private productService:ProductService,private cartService:CartService,private authService: AuthService,private checkoutService:CheckoutService,private route:Router){}


handleAddToCart(arg0: any) {
console.log(arg0);
}

ngOnInit(): void {
  this.cartService.getCartItems().subscribe(items => {
    this.cartItems = items;
  });
  this.loadCartItems();
 }
 
 loadCartItems(): void {
  const cartData = localStorage.getItem(`cart_${this.userId}`);
  if (cartData) {
    this.cartItems = JSON.parse(cartData);
  }
}

increaseQuantity(index: number): void {
  if (index >= 0 && index < this.cartItems.length) {
    this.cartItems[index].qte += 1;
    this.cartService.updateCart(this.cartItems);
  }
}

decreaseQuantity(index: number): void {
  if (index >= 0 && index < this.cartItems.length && this.cartItems[index].qte > 1) {
    this.cartItems[index].qte -= 1;
    this.cartService.updateCart(this.cartItems);
  }
}

calculateTotal(): number {
  return this.calculateSubtotal() + this.calculateShipping();
}

calculateShipping(): number {
  return this.calculateSubtotal() > 500 ? 0 : 15; 
}

calculateSubtotal(): number {
  return this.cartItems.reduce((total, item) => total + (item.price * item.qte), 0);
}

removeItem(index: number): void {
  if (index >= 0 && index < this.cartItems.length) {
    const productId = this.cartItems[index].productId;    
    if (productId !== undefined) {
      this.cartService.removeItem(productId);
    }
  }
}


onCheckout(){
  this.route.navigate(['checkout']);
}


 slideConfig = {dots:true,loop:false,draggable:false,arrows:false,mobileFirst: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

}
