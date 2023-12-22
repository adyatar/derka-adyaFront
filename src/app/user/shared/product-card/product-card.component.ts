import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',

})

export class ProductCardComponent implements OnInit {
  
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();

  constructor() { }
  ngOnInit(): void { }


  onAddToCart() {
    this.addToCart.emit(this.product);
  }
 
}