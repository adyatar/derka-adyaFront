import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../models/product.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  standalone : true,
  imports:[RouterModule]
  

})

export class ProductCardComponent implements OnInit {
  
  @Input() product!: Product;
  @Input() isInCart: boolean = false;
  @Output() addToCart = new EventEmitter<Product>();
  @Output() goToProdDetail = new EventEmitter<Product>();
  @Input() productId!: number;
  
  constructor() { }
  ngOnInit(): void { }

  onAddToCart() {
    this.addToCart.emit(this.product);
  }

  goToProductDetail(){
    this.goToProdDetail.emit(this.product);
  }
 
}
