import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';

@Component({
    selector: 'app-product-category',
    templateUrl: './product-category.component.html',
    styleUrl: './product-category.component.css',
    standalone: true,
    imports: [CommonModule, SharedModule,NgxPaginationModule],
    encapsulation: ViewEncapsulation.None,

}) 
export class ProductCategoryComponent implements OnInit {

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
    this.categoeyProduct = this.productService.getHomePageProducts();
   }

   

   handleAddToCart(id: number) {
    console.log(id)
 }
}
