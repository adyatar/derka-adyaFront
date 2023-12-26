import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from "./user.component";
const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {path: 'cart',loadComponent:()=> import('./components/cart/cart.component').then(m=>m.CartComponent)},
      {path:'detail/:id', loadComponent: () => import('./components/product-detail/produc-detail.component').then(m => m.ProducDetailComponent)},
      { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
      { path: 'login', loadComponent: () => import('./components/auth/login/login.component').then(m => m.LoginComponent) },
      { path: 'register', loadComponent: () => import('./components/auth/register/register.component').then(m => m.RegisterComponent) },
      { path: 'category', loadComponent: () => import('./components/product-category/product-category.component').then(m => m.ProductCategoryComponent) },
      
    ]
  },
  { path:'account',loadChildren:()=>import('./components/account/account.module').then(m=>m.AccountModule)},
  {path: 'checkout',loadComponent:()=> import('./components/checkout/checkout.component').then(m=>m.CheckoutComponent)},
  { path: 'payment-success', loadComponent: () => import('./components/payment-success/payment-success.component').then(m => m.PaymentSuccessComponent) },
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
