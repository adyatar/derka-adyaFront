import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from '../../shared/shared.module';
import { BrandSectionComponent } from './brand-section/brand-section.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { TextSlideComponent } from './text-slide/text-slide.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    ProductCardComponent,
    BrandSectionComponent,
    CategoryCardComponent,
    TextSlideComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule,
    SharedModule 
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }
