import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { authGuard } from '../../../services/Security/auth.guard';
import { roleGuard } from '../../../services/Security/role.guard';

const routes: Routes = [
  {path:'',component:AccountComponent,canActivate:[authGuard,roleGuard],data: { role: 'USER' },children:[
    {path: 'order',loadComponent:()=> import('./order/order.component').then(m=>m.OrderComponent)},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
