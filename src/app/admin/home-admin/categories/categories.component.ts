import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category.model';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from "../add-category/add-category.component";
import { DeleteCategoryComponent } from "../delete-category/delete-category.component";
import { ProductService } from '../../../services/product.service';

@Component({
    selector: 'app-categories',
    standalone: true,
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.css',
    imports: [CommonModule, AddCategoryComponent, DeleteCategoryComponent]
})
export class CategoriesComponent implements OnInit{

  categories:Category[]=[];
  showAddCategory=false;
  showDeleteCategory=false;

  selectedCategoryName!:string;
  selectedCategoryId!:number;

  constructor(private categoryService:CategoryService,private productService:ProductService){}

  ngOnInit(): void {
    this.getAllCategories();
   
  }
  
  getAllCategories(){
    this.categoryService.getAllCategories().subscribe((cat)=>this.categories=cat);
  }

  openAddCategory(){this.showAddCategory=true;}

  openDeleteCategory(categoryName:string,categoryId:number)
  {
    this.selectedCategoryId=categoryId;
    this.selectedCategoryName=categoryName;
    this.showDeleteCategory=true;
  }

  closeAddCategory()
  {
    this.showAddCategory=false;
    this.showDeleteCategory=false;
  }
  onCategoryAdded(category:Category)
  {
    console.log("category added f categorie",category);
    this.categoryService.addCategory(category).subscribe({
      next: (response) => {
        console.log('category added successfully:', response);
        this.getAllCategories();
        this.closeAddCategory();
      },
      error: (error) => {
        console.error('Error adding category:', error);
      }
    });
  }
  onCategotyDeleted(id:number)
  {
        this.categoryService.DeleteCategory(id).subscribe({
          next: (response) => {
            console.log('category deleted successfully', response);
            this.getAllCategories();
            this.closeAddCategory();
            //synch
            this.productService.notifyProductChange();
            // Update your UI or product list as necessary
          },
          error: (error) => {
            console.error('There was an error deleting the category', error);
          }
        });
  }
/*
  onDeleteConfirmed(productId: number) {
    console.log("eeeeeeee"+productId);
    this.productService.deleteProductById(productId).subscribe({
      next: (response) => {
        console.log('Product deleted successfully', response);
        this.getAllProducts();
        //synch
        this.productService.notifyProductChange();
        // Update your UI or product list as necessary
      },
      error: (error) => {
        console.error('There was an error deleting the product', error);
      }
    });
   this.onClosePopup();
  } */



}
