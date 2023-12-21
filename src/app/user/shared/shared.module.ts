import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import {  HeaderComponent } from "./header/header.component";
import {  FooterComponent } from "./footer/footer.component";
import {  RouterModule } from "@angular/router";
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [
    FeatureSectionComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent
  ],
  exports: [
    FeatureSectionComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
