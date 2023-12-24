import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone:true,
  imports:[RouterModule,CommonModule]
})
export class NavbarComponent implements OnInit {



  ngOnInit(): void {
   
  }


 

  

}
