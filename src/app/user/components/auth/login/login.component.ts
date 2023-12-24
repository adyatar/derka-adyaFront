import { CommonModule } from '@angular/common';
import {  Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../services/Security/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FeatureSectionComponent } from "../../../shared/feature-section/feature-section.component";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    standalone: true,
    imports: [RouterModule, CommonModule, ReactiveFormsModule, FeatureSectionComponent]
})
export class LoginComponent implements OnInit{
  loginForm?: any;
  loginError!: string;
  

  constructor(private authService: AuthService,private router: Router,private fb: FormBuilder){}


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      this.authService.login(email, password).subscribe(success => {
        if (success) {
          this.router.navigate(['/account']);
        } else {
          console.log("Login failed");
          this.loginError = 'Login or password is incorrect';
        }
      });
    } else {
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        control?.markAsTouched();
      });
    }
  }




 
}
