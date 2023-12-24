import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from "../../../services/theme.service";
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { AuthService } from '../../../services/Security/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone:true,
  imports:[RouterModule]
})
export class HeaderComponent implements OnInit {
 
  cartItemCount: number = 0;
  isDropdownVisible: boolean = false;
  isLoggedIn: boolean = false;
  userRole: string = '';

  constructor(private themeService: ThemeService,private cartService:CartService,private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isAuthenticatedUser().subscribe(status => this.isLoggedIn = status);
        this.authService.getUserRole().subscribe(role => this.userRole = role);
   }


   onLogout() {
    this.authService.logout()
  }



  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  

  @HostListener('document:click', ['$event'])
  clickOutside(event: any) {
    if (!event.target.closest('#user-dropdown') && !event.target.closest('#dropdown-button')) {
      this.isDropdownVisible = false;
    }
  }

}
