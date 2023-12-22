import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    UserComponent,    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HeaderComponent,
    FooterComponent,
  ],
})
export class UserModule { }
