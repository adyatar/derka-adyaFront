import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureSectionComponent } from './feature-section/feature-section.component';



@NgModule({
  declarations: [FeatureSectionComponent],
  exports: [FeatureSectionComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
