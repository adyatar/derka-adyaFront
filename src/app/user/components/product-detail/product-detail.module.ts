import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducDetailComponent } from './produc-detail.component';



@NgModule({
  declarations: [ProducDetailComponent],
  exports: [ProducDetailComponent],
  imports: [
    CommonModule
  ]
})
export class ProductDetailModule { }
