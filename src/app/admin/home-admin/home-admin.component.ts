import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';
import { ProductsComponent } from './products/products.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [RouterModule,HeaderComponent,FooterComponent,InfoComponent,ProductsComponent,ProductDeleteComponent],
  templateUrl: './home-admin.component.html',



})
export class HomeAdminComponent {

}
