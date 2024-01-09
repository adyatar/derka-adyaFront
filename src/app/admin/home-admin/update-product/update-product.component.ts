import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../models/product.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Category } from '../../../models/category.model';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {

@Input() product!:Product;
@Output() closePopup = new EventEmitter<void>();
@Output() productUpdate = new EventEmitter<Product>();

categories:Category[]=[];
constructor(private categoryService:CategoryService) {}

ngOnInit(): void {
 this.categoryService.getAllCategories().subscribe(
  data=>{
    this.categories=data;
  },
  error => {
    console.error('Error fetching categories', error);
  }
 );
}

  productName: string = '';
  productDescription: string = '';
  productPrice: string = '';
  productQuantity: string = '';
  productCategory: string = ''; // Assuming this is a string; adjust as necessary
  selectedFileName: string = '';
  productId: number=0;

  submitProduct() {
    // Create a product object based on your Product interface
    const productData: Product = {
      id_prod: this.product.id_prod, // Assuming this will be set by your backend or database
      name_prod: this.product.name_prod,
      desc_prod: this.product.desc_prod,
      price: this.product.price,
      qte_prod: this.product.qte_prod,
      image_prod: this.selectedFileName,
      idCat: this.product.idCat
    };

    // Emit the event with the product data
    this.productUpdate.emit(productData);
    // Reset form fields or close modal if necessary
  }
  onFileSelected(event: any,oldImg:string) {
    const file: File = event.target.files[0];
    console.log("file   :",file,"  oldImg  :",oldImg);
    if (file) {
      this.selectedFileName = file.name;
    }
    else{
      this.selectedFileName=oldImg;
    }
  }
 
  close() {
    console.log('Close button clicked');
    this.closePopup.emit();
  }

}


