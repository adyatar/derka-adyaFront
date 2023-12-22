import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProductSectionComponent } from './components/home/product-section/product-section.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    UserComponent,    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ProductSectionComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports:[
    ProductSectionComponent
  ]
})
export class UserModule { }
