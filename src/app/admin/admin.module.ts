import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './home-admin/header/header.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,AdminRoutingModule
  ]
 
})
export class AdminModule { }
