import { Component } from '@angular/core';
import { AuthService } from '../../services/authService/auth-service';

@Component({
  selector: 'app-login-view',
  imports: [],
  templateUrl: './login-view.html',
  styleUrl: './login-view.css'
})
export class LoginView {

  constructor(private authService: AuthService) { }


  login() {
    this.authService.login('admin', 'admin');
  }
}
