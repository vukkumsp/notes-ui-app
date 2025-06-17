import { Component } from '@angular/core';
import { AuthService } from '../../services/authService/auth-service';
import { NotesService } from '../../services/notesService/notes-service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-body-component',
  imports: [],
  templateUrl: './body-component.html',
  styleUrl: './body-component.css'
})
export class BodyComponent {



  constructor(private authService: AuthService, private notesService: NotesService) {
    // Initialization logic can go here
  }

}
