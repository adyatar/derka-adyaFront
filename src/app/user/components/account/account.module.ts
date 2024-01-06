import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { FeatureSectionComponent } from "../../shared/feature-section/feature-section.component";
import { MainContentComponent } from './main-content/main-content.component';


@NgModule({
    declarations: [
        AccountComponent,
        MainContentComponent
    ],
    exports: [],
    providers: [],
    imports: [
        CommonModule,
        AccountRoutingModule,
        NavbarComponent,
        SidebarComponent,
        FooterComponent,
        FeatureSectionComponent,
    ]
})
export class AccountModule { }
