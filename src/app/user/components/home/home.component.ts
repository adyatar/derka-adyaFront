import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone:true,
  imports:[CommonModule,
    SlickCarouselModule,
    SharedModule,RouterModule,],
    
})
export class HomeComponent{
 
}
