import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureSectionComponent } from '../../shared/feature-section/feature-section.component';
import { ProductSectionComponent } from '../home/product-section/product-section.component';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';


@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    imports: [CommonModule, ProductSectionComponent, RouterModule, ProductCardComponent, SlickCarouselModule, FeatureSectionComponent]
})
export class CartComponent implements OnInit {

handleAddToCart(arg0: any) {
console.log(arg0);

}
cartProducts: Product[] = [];
constructor(private productService:ProductService){

}
ngOnInit(): void {
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
