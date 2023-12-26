import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem.model';
import { Product } from '../models/product.model';
import { AuthService } from './Security/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 private cart: CartItem[] = [];
 private cartSubject = new BehaviorSubject<CartItem[]>([]);
 private userId!: number | '0';

 constructor(private authService: AuthService, private route: Router) {
  this.authService.isAuthenticatedUser().subscribe(isAuth => {
    this.userId = isAuth ? this.authService.getUserId() : '0';
    this.loadUserCart();
  });
}


private loadUserCart(): void {
    const cartData = localStorage.getItem(`cart_${this.userId}`);
    this.cart = cartData ? JSON.parse(cartData) : [];
    this.cartSubject.next(this.cart);
  }


addToCart(product: Product): void {
    const userId = this.authService.getUserId() || '0';  
    let existingCartItem = this.cart.find(p => p.productId === product.id_prod);
    if (existingCartItem) {
      existingCartItem.qte++;
    } else {
      const newCartItem: CartItem = {
        productId: product.id_prod,
        qte: 1,
        price: product.price,
        product: {
          id_prod:product.id_prod,
          name_prod: product.name_prod,
          image_prod: product.image_prod,
          price:product.price,
        }
      };
      this.cart.push(newCartItem);
      this.route.navigate(['/cart']);
    }

    localStorage.setItem(`cart_${userId}`, JSON.stringify(this.cart));
  } 


  isProductInCart(productId: number): boolean {
    const userId = this.authService.getUserId();
    if (userId === null) {
      return false;
    }
    const cartData = localStorage.getItem(`cart_${userId}`);
    if (cartData) {
        this.cart = JSON.parse(cartData);
    }
    return this.cart.some(item => item.productId === productId);
}

updateCart(updatedCart: CartItem[]): void {
  this.cart = updatedCart;
  this.saveCart();
}

private saveCart(): void {
  this.cartSubject.next(this.cart); 
  const cartKey = `cart_${this.userId}`;
  localStorage.setItem(cartKey, JSON.stringify(this.cart)); 
}


removeItem(productId: number): void {
  this.cart = this.cart.filter(item => item.productId !== productId);
  console.log(this.cart.length);
  localStorage.removeItem(`cart_${this.userId}`);
  
  this.saveCart();
}

getCartItems(): Observable<CartItem[]> {
  return this.cartSubject.asObservable();
}

}
