import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from './environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  environment = environment;
  protected title = 'notes-ui-app';
}
