import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgOptimizedImage } from '@angular/common';
<<<<<<< HEAD
import { CoreModule } from './cor/core.module';
=======
import { FeatureSectionComponent } from './components/feature-section/feature-section.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProducDetailComponent } from './produc-detail/produc-detail.component';
>>>>>>> 69c44f94510ad507db85c6b082cf251c92e244be



@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent,    
=======
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    FeatureSectionComponent,
    ProductCardComponent,
    ProducDetailComponent
>>>>>>> 69c44f94510ad507db85c6b082cf251c92e244be
  ],
  imports: [
    NgOptimizedImage,
    BrowserModule,
    AppRoutingModule,
    CoreModule,

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
