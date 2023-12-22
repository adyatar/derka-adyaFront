import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../../shared/product-card/product-card.component';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css',
  encapsulation: ViewEncapsulation.None,
  standalone:true,
  imports:[SlickCarouselModule,ProductCardComponent,CommonModule]
})
export class ProductSectionComponent implements OnInit {


constructor(private productService: ProductService) { }

  homePageProducts: Product[] = [];

  httpClient = inject(HttpClient);

  category = [ "Apple", "Beats", "Huawei", "PlayStation" ];

  ngOnInit(): void {
    this.homePageProducts = this.productService.getHomePageProducts();
   }

   handleAddToCart(id: number) {
      console.log(id)
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
