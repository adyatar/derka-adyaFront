import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.css',
  standalone:true,
  imports:[RouterModule,CommonModule]
})
export class PaymentSuccessComponent {

}
