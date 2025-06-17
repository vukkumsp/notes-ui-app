import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  imports: [],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css'
})
export class FooterComponent {

  get currentYear(): number {
    return new Date().getFullYear();
  }
  get appVersion(): string {
    return '1.0.0'; // Replace with your actual app version
  }
  get appName(): string {
    return 'Notes App'; // Replace with your actual app name
  }
}
