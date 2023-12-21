import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ProductSectionComponent implements OnInit {


constructor(private productService: ProductService) { }

  homePageProducts: Product[] = [];

  category = [ "Apple", "Beats", "Huawei", "PlayStation" ];



  ngOnInit(): void {
    this.homePageProducts = this.productService.getHomePageProducts();
    console.log(this.homePageProducts)
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
