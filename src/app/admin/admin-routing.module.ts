import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { authGuard } from '../services/Security/auth.guard';
import { roleGuard } from '../services/Security/role.guard';
import { ProductsComponent } from './home-admin/products/products.component';
import { HomeComponent } from '../user/components/home/home.component';
import { CategoriesComponent } from './home-admin/categories/categories.component';

const routes: Routes = [
  {
    path: '',
    component: HomeAdminComponent,
    canActivate:[authGuard,roleGuard],
    data: { role: 'ADMIN' },
    children: [
      { path: 'admin', loadComponent:()=>import('./home-admin/home-admin.component').then(m=>m.HomeAdminComponent)},
      {path: '',loadComponent:()=>import('./home-admin/products/products.component').then(m=>m.ProductsComponent)},
      {path:'products',loadComponent:()=>import('./home-admin/products/products.component').then(m=>m.ProductsComponent)},
      {path:'categories',loadComponent:()=>import('./home-admin/categories/categories.component').then(c=>c.CategoriesComponent)}
        ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
