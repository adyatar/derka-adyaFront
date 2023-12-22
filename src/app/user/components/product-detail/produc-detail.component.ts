import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

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
  product!: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      if (id) {
        // Fetch the product details using the ProductService
        this.productService.getProductById(id).subscribe(product => {
          this.product = product;
        }, error => {
          // Handle errors here, such as product not found or server error
          console.error('Error fetching product', error);
        });
      }
    });
  }

}
