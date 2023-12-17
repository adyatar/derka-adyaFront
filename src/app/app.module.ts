import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { NgOptimizedImage } from '@angular/common';
import { FeatureSectionComponent } from './components/feature-section/feature-section.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    FeatureSectionComponent,
    ProductCardComponent
  ],
  imports: [
    NgOptimizedImage,
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
