import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { User, UserRequest } from '../../../../models/user.model';
import { AuthService } from '../../../../services/Security/auth.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css'
})
export class UserinfoComponent implements OnInit {

  userForm?: any;
  userError!: string;
  userId!:number;
  selectedFile!: File;

  constructor(private userService:UserService,private authService:AuthService,private fb: FormBuilder) { }

user!:User | null;

  ngOnInit(): void {
    this.getUserInfo(); 
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name:['',Validators.required]
    }); 
  }

  getUserInfo(){
    this.userId = this.authService.getUserId();
    this.userService.getUserProfile(this.userId).subscribe((data)=>{
      this.user=data;
    })
  }


onSubmit() {
  if (this.userForm.valid && this.selectedFile) {
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
    formData.append('email', this.userForm.get('email').value);
    formData.append('name', this.userForm.get('name').value);

    this.userService.testFileUpload(this.userId, formData).subscribe(
      success => {
        if (!success) {
          this.userError = 'Error Occurred';
        }
      },
      error => console.log(error)
    );
  } else {
    // Handle form validation failure
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      control.markAsTouched();
    });
  }
}

onFileSelected(event:any) {
  const file = event.target.files[0];
  if (file) {
    this.selectedFile = file;
  }
}


  }

