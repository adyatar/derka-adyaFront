import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { authGuard } from '../services/Security/auth.guard';
import { roleGuard } from '../services/Security/role.guard';

const routes: Routes = [
{path:'',component:AdminComponent,canActivate:[authGuard,roleGuard],data: { role: 'ADMIN' },children:[
  { path: '', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) }
]}


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
