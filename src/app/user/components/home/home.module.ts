import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrandSectionComponent } from './brand-section/brand-section.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { TextSlideComponent } from './text-slide/text-slide.component';
import { SharedModule } from "../../shared/shared.module";
import { ProductSectionComponent } from './product-section/product-section.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    BrandSectionComponent,
    CategoryCardComponent,
    TextSlideComponent,
    ProductSectionComponent,
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

