import { Component } from '@angular/core';
import { environment } from './environment';
import { HeaderComponent } from "./components/header-component/header-component";
import { FooterComponent } from "./components/footer-component/footer-component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  environment = environment;
  protected title = 'notes-ui-app';
}
