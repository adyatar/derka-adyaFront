import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";


@NgModule({
    declarations: [
        AccountComponent,
    ],
    exports: [],
    imports: [
        CommonModule,
        AccountRoutingModule,
        NavbarComponent,
        SidebarComponent
    ]
})
export class AccountModule { }
