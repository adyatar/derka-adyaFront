import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  UserComponent
} from "./user.component";
import { ProductCategoryComponent } from './components/product-category/product-category.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
      { path: 'login', loadComponent: () => import('./components/auth/login/login.component').then(m => m.LoginComponent) },
      { path: 'register', loadComponent: () => import('./components/auth/register/register.component').then(m => m.RegisterComponent) },
      { path: 'category', loadComponent: () => import('./components/product-category/product-category.component').then(m => m.ProductCategoryComponent) },

    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
