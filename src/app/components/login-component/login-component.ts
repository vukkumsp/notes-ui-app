import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/authService/auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  private loginFormBuilder = inject(FormBuilder);

  loginForm: FormGroup = this.loginFormBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log('Logging in with:', username, password);
      if(username != null && username != undefined && password != null && password != undefined){
        this.authService.login(username, password);
        // this.loginForm.reset();
      }
      
    } else {
      console.error('Form is invalid');
    }
  }

}
