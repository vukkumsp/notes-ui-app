import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-note-component',
  imports: [CommonModule],
  templateUrl: './note-component.html',
  styleUrl: './note-component.css'
})
export class NoteComponent {

  @Input() title: string = '';
  @Input() content: string = '';
  @Input() createdAt: string = '';
  @Input() updatedAt: string = '';
  @Input() id: string = '';

  constructor() {
    // Initialization logic can go here
  }
}
