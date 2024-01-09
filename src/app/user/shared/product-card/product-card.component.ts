import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../models/product.model';
import { Router, RouterModule } from '@angular/router';
import { initFlowbite } from 'flowbite';

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
  
  constructor(private route:Router) { }
  ngOnInit(): void { initFlowbite();
  }

  onAddToCart() {
    this.addToCart.emit(this.product);
  }

  viewCart(){
    this.route.navigate(['/cart']);
  }

  goToProductDetail(){
    this.goToProdDetail.emit(this.product);
  }
 
}
