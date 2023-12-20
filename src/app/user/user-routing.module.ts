import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  UserComponent
} from "./user.component";

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
      { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('./components/auth/register/register.module').then(m => m.RegisterModule) },

    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
