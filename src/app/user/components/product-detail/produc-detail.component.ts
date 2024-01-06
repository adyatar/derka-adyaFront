import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-produc-detail',
  templateUrl: './produc-detail.component.html',
  styleUrl: './produc-detail.component.css',
  standalone:true,
  imports:[
    CommonModule

  ]
})
export class ProducDetailComponent implements OnInit{
  product!: Product ;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService:CartService
  ) {}

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      if (id) {
        this.productService.getProductById(id).subscribe(product => {
          if(product != null){
            this.product = product;
          }
        }, error => {
          console.error('Error fetching product', error);
        });
      }
    });
  }

  addToCart(product: Product): void{
    this.cartService.addToCart(product);
  }

  isProductInCart(productId: number): boolean{
    return this.cartService.isProductInCart(productId);
  }

}
