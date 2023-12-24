import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureSectionComponent } from '../../shared/feature-section/feature-section.component';
import { ProductSectionComponent } from '../home/product-section/product-section.component';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { CartItem } from '../../../models/cartItem.model';
import { CartService } from '../../../services/cart.service';
import { AuthService } from '../../../services/Security/auth.service';


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


constructor(private productService:ProductService,private cartService:CartService,private authService: AuthService){}


handleAddToCart(arg0: any) {
console.log(arg0);
}

ngOnInit(): void {
  this.loadCartItems();
 }
 
 loadCartItems(): void {
  const userId = this.authService.getUserId() || 'unauthenticated';
  const cartData = localStorage.getItem(`cart_${userId}`);
  if (cartData) {
    this.cartItems = JSON.parse(cartData);
  }
}

increaseQuantity(index: number): void {
  this.cartItems[index].qte += 1;
  this.updateCart();
}

decreaseQuantity(index: number): void {
  if (this.cartItems[index].qte > 1) {
    this.cartItems[index].qte -= 1;
    this.updateCart();
  }
}

updateCart(): void {
  const userId = this.authService.getUserId();
  if (userId !== null) {
    localStorage.setItem(`cart_${userId}`, JSON.stringify(this.cartItems));
  }
}


calculateTotal(): number {
  return this.calculateSubtotal() + this.calculateShipping();
}


removeItem(index: number) {
  this.cartItems.splice(index, 1);
  const userId = this.authService.getUserId() || 'unauthenticated';
  const cartKey = `cart_${userId}`;
  localStorage.setItem(cartKey, JSON.stringify(this.cartItems));
}


calculateShipping(): number {
  return this.cartItems.length > 0 ? 5.00 : 0; 
}

calculateSubtotal(): number {
  return this.cartItems.reduce((total, item) => total + (item.price * item.qte), 0);
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
