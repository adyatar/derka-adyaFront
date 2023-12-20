import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  declarations: [
    HomeComponent,
    FeatureSectionComponent,
    HeroSectionComponent,
    ProductCardComponent
    
  ],
  exports:[HomeComponent,
    FeatureSectionComponent,
    HeroSectionComponent,
    ProductCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }
