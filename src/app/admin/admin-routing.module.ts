import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { authGuard } from '../services/Security/auth.guard';
import { roleGuard } from '../services/Security/role.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeAdminComponent,canActivate:[authGuard,roleGuard],data: { role: 'ADMIN' },
    children: [
      { path: 'admin', loadChildren: () => import('./home-admin/home-admin.component').then(m => m.HomeAdminComponent) },
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
