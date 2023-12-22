import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports:[RouterModule,CommonModule]
})
export class LoginComponent{


}
