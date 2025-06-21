import { Component } from '@angular/core';
import { AuthService } from '../../services/authService/auth-service';
import { LoginComponent } from "../../components/login-component/login-component";

@Component({
  selector: 'app-login-view',
  imports: [LoginComponent],
  templateUrl: './login-view.html',
  styleUrl: './login-view.css'
})
export class LoginView {

  constructor(private authService: AuthService) { }


  login() {
    this.authService.login('admin', 'admin');
  }
}
