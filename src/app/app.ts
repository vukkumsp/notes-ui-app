import { Component } from '@angular/core';
import { environment } from './environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  environment = environment;
  protected title = 'notes-ui-app';
}
