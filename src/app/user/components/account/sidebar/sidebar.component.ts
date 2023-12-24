import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../../services/Security/auth.service';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  user!:User | null;
  
  constructor(private authService:AuthService,private userService: UserService){}

  ngOnInit(): void {
    this.getUserInfo();  
}

getUserInfo(){
  this.userService.getUserProfile(this.authService.getUserId()).subscribe((data)=>{
    this.user=data;
  })
}

  logOut():void{    
    this.authService.logout();
  }

}
