import { Component, HostListener, OnInit } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { AuthService } from '../../../services/Security/auth.service';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone:true,
  imports:[RouterModule,CommonModule]
})
export class HeaderComponent implements OnInit {
 
  cartItemCount: number = 0;
  isDropdownVisible: boolean = false;
  isLoggedIn: boolean = false;
  userRole: string = '';
  user!:User | null

  constructor(private userservice:UserService,
    private authService: AuthService,private cartService:CartService) { }

  ngOnInit(): void {
    this.authService.isAuthenticatedUser().subscribe(status => {
      this.isLoggedIn = status;
      if (status) {
        const userId = this.authService.getUserId();
        if (userId) {
          this.userservice.getUserProfile(userId).subscribe(
            data => this.user = data,
            error => console.log(error)   
          );
        }
      }
    }); 

    this.cartService.cartItemCount.subscribe(count => {
      this.cartItemCount = count;
    });
   }


   onLogout() {
    this.authService.logout()
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
