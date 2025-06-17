import { Component } from '@angular/core';
import { environment } from './environment';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/header-component/header-component";
import { FooterComponent } from "./components/footer-component/footer-component";
import { BodyComponent } from "./components/body-component/body-component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, FooterComponent, BodyComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  environment = environment;
  protected title = 'notes-ui-app';
}
