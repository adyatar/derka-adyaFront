import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FeatureSectionComponent } from '../../../shared/feature-section/feature-section.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/Security/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone:true,
  imports:[RouterModule,CommonModule,ReactiveFormsModule,FeatureSectionComponent]
})
export class RegisterComponent implements OnInit {
  registerForm?: any;
  registeError!: string;

  constructor(private authService: AuthService,private router: Router,private fb: FormBuilder){}


  ngOnInit(): void {
     this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name:['',Validators.required]
    });
  }


  onSubmit(): void {
    if (this.registerForm.valid) {
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;
      const name = this.registerForm.get('name')?.value;

      this.authService.register(email, password,name).subscribe(success => {
        if (success) {
          this.router.navigate(['login']); 
        }else {
          this.registeError = 'User Already Exist!!';
        }
      });
    } else {
      Object.keys(this.registerForm.controls).forEach(field => {
        const control = this.registerForm.get(field);
        control?.markAsTouched();
      });
    }
  }

}
