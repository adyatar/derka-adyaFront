import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgOptimizedImage } from '@angular/common';
import { CoreModule } from './cor/core.module';
import { ProductDetailModule } from './product-detail/product-detail.module';






@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    NgOptimizedImage,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ProductDetailModule


  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
