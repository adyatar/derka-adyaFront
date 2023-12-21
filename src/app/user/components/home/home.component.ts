import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BrandSectionComponent } from './brand-section/brand-section.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { TextSlideComponent } from './text-slide/text-slide.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone:true,
  imports:[CommonModule,
    SlickCarouselModule,
    SharedModule,RouterModule,BrandSectionComponent,CategoryCardComponent,HeroSectionComponent,ProductSectionComponent,TextSlideComponent]
})
export class HomeComponent{
 
}
