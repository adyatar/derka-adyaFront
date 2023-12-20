import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import {  HeaderComponent } from "./header/header.component";
import {  FooterComponent } from "./footer/footer.component";
import {  RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    FeatureSectionComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    FeatureSectionComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
