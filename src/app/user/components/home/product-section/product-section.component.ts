import { Component, OnInit, ViewEncapsulation,AfterViewInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../models/product.model';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../../shared/product-card/product-card.component';
import { Category } from '../../../../models/category.model';
import { CategoryService } from '../../../../services/category.service';
import { Router } from '@angular/router';
import { CartService } from '../../../../services/cart.service';
import { HeaderComponent } from '../../../shared/header/header.component';
@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css',
  encapsulation: ViewEncapsulation.None,
  standalone:true,
  imports:[SlickCarouselModule,ProductCardComponent,CommonModule,HeaderComponent]
})
export class ProductSectionComponent implements OnInit,AfterViewInit {


constructor(private productService: ProductService,private categorySrv:CategoryService,private router:Router,private cartService:CartService) { }

//Attributes
  products:Product[]=[];
  category:Category[]=[];
  dataReady = false;

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
   }

  ngAfterViewInit() {
    this.initializeCarousel();
  }

   //Methods
   goToProductDetail(productId: number): void {
    this.router.navigate(['/detail', productId]);
  }

  addToCart(product: Product): void{
      this.cartService.addToCart(product);
  }

  isProductInCart(productId: number): boolean{
    return this.cartService.isProductInCart(productId);
  }

   getAllProducts(){
    this.productService.getAllProducts().subscribe(
      (data)=>{this.products=data }
    );
   }

   getProductsByCategory(id: number) {
    this.productService.getAllProductsByCategory(id).subscribe(
      (data)=>{this.products = data;this.initializeCarousel();}
    );
    }
    
   getAllCategories(){
    this.categorySrv.getAllCategories().subscribe(
      (data)=>{this.category=data}   
       );
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

  initializeCarousel() {
    this.dataReady = false;
    setTimeout(() => { this.dataReady = true; }, 0);
  }

}
