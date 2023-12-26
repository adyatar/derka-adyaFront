import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeAdminComponent,
    children: [
      { path: 'admin', loadChildren: () => import('./home-admin/home-admin.component').then(m => m.HomeAdminComponent) },
    
      // Add more routes as needed
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
