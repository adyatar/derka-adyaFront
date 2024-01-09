import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit{

  name_cat!:string;
  selectedFileName: string = ''; // For the image name
  
  @Output() categoryAdded = new EventEmitter<Category>(); 
  @Output() closePopup=new EventEmitter<void>();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submitcategory(){
    const categoryData:Category=
    {
      idCat: 0,
      name_cat: this.name_cat,
      img_name: this.selectedFileName,
      products: []
    };
    this.categoryAdded.emit(categoryData);
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
