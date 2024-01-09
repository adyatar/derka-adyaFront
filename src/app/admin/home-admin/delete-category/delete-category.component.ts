import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-category',
  standalone: true,
  imports: [],
  templateUrl: './delete-category.component.html',
  styleUrl: './delete-category.component.css'
})

export class DeleteCategoryComponent {

  @Input() selectedCategory!:string;
  @Input() selectedCategoryId!:number;
  @Output() closePupUp =new EventEmitter<void>();
  @Output() confirmDeleteCategory=new EventEmitter<number>();
  close() {
    this.closePupUp.emit();
    }
    confirmDeletion() {
    this.confirmDeleteCategory.emit(this.selectedCategoryId);
    }
}

