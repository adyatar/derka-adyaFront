import { Component , EventEmitter, OnInit, Output} from '@angular/core';
import { Product } from '../../../models/product.model';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../models/category.model';
import { CategoryService } from '../../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{
  productName: string = '';
  productDescription: string = '';
  productPrice!: number ;
  productQuantity!: number;
  productCategory!: number; // Assuming this is a string; adjust as necessary
  selectedFileName: string = ''; // For the image name

  @Output() closePopup = new EventEmitter<void>();
  @Output() productAdded = new EventEmitter<Product>(); // Assuming Product is your model

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

 

  submitProduct() {
    // Create a product object based on your Product interface
    const productData: Product = {
      // Assuming this will be set by your backend or database
      name_prod: this.productName,
      desc_prod: this.productDescription,
      price: this.productPrice,
      qte_prod: this.productQuantity,
      image_prod: this.selectedFileName,
      idCat: this.productCategory,
      id_prod: 0
    };

    // Emit the event with the product data
    this.productAdded.emit(productData);
    // Reset form fields or close modal if necessary
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;
    }
  }
 
  close() {
    console.log('Close button clicked');
    this.closePopup.emit();
  }
}