import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { FeatureSectionComponent } from '../../shared/feature-section/feature-section.component';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
    selector: 'app-product-category',
    templateUrl: './product-category.component.html',
    styleUrl: './product-category.component.css',
    standalone: true,
    imports: [CommonModule,NgxPaginationModule,FeatureSectionComponent,ProductCardComponent],
    encapsulation: ViewEncapsulation.None,

}) 
export class ProductCategoryComponent implements OnInit {

  category = [ "Apple", "Beats", "Huawei", "PlayStation" ];

  currentPage: number = 1;
  itemsPerPage: number = 12;
  twoColumnGrid: boolean = false;
  switchToTwoColumns() {
    this.twoColumnGrid = true;
  }

  changePage(newPage: number) {
    this.currentPage = newPage;
    window.scrollTo(0, 0);
  }
  switchTo3Columns(){
    this.twoColumnGrid = false;
  }
  constructor(private productService: ProductService) { }
  categoeyProduct: Product[] = [];

  ngOnInit(): void {
   }


   handleAddToCart(id: number) {
    console.log(id)
 }
}
