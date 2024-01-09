import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { AuthService } from '../../../services/Security/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  constructor(private authService:AuthService) { }

  @Input() message: string = '';
  @Output() closeModal = new EventEmitter<void>();

  onLogout() {
    this.authService.logout();
    this.closeModal.emit(); // Emit an event to close the modal
  }


}
