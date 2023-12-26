import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../../models/product.model';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,ProductDeleteComponent,AddProductComponent,UpdateProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService,private router:Router) { }

  products:Product[]=[];

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      (data)=>{this.products=data }
    );
   }
   showDeleteConfirmation = false;
   showAddProduct=false;
   showUpdate=false;

   selectedProductName!: string;
   selectedProductId!: number;
   selectedProduct!:Product;
  
   openUpdate(product:Product)
   {
    this.selectedProduct=product;
    this.showUpdate=true;
    console.log("clicked product to update : ",product);
   }

  openDeleteConfirmation(productName: string, productId: number) {
    this.selectedProductName = productName;
    this.selectedProductId = productId;
    this.showDeleteConfirmation = true;
  }
  openAddProduct(){this.showAddProduct=true;}

  onClosePopup() {
    this.showDeleteConfirmation = false;
    this.showAddProduct=false;
    this.showUpdate=false;
  }
  onDeleteConfirmed(productId: number) {
    console.log("eeeeeeee"+productId);
    this.productService.deleteProductById(productId).subscribe({
      next: (response) => {
        console.log('Product deleted successfully', response);
        this.getAllProducts();
        // Update your UI or product list as necessary
      },
      error: (error) => {
        console.error('There was an error deleting the product', error);
      }
    });
   this.onClosePopup();
  }
  onProductAdded(product: Product) {
    console.log('Received product:', product);
    this.productService.addProduct(product).subscribe({
      next: (response) => {
        console.log('Product added successfully:', response);
        this.getAllProducts();
        this.onClosePopup();
      },
      error: (error) => {
        console.error('Error adding product:', error);
      }
    });
    
    // Handle the product data here (e.g., send it to a service or add to a list)
  }

  onProductUpdate(product:Product){
    console.log('updated :',product);
    this.productService.updateProduct(product).subscribe({
      next: (response) => {
        console.log('Product updated successfully:', response);
        this.getAllProducts();
        this.onClosePopup();
      },
      error: (error) => {
        console.error('Error updating product:', error);
      }
    });
  }

}
