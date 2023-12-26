import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent {
  @Input() productName!:string;
  @Input() productId!: number;
  @Output() closePopup = new EventEmitter<void>();
  @Output() confirmDelete = new EventEmitter<number>();
  // Emit an event when the close button is clicked
  close() {
    this.closePopup.emit();
  }
  confirmDeletion() {
    this.confirmDelete.emit(this.productId);
  }
}
