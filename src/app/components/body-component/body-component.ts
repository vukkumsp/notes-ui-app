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

  login(){
    this.authService.login('admin', 'admin')
        .pipe(
          switchMap(response => {
            console.log('Login successful:', response);
            // Assuming the response contains a token, store it
            this.authService.storage.setItem('authToken', response.token);
            return this.notesService.getNotes(); // Fetch notes after login  
          })
        ).subscribe({
        next: (data) => {
          console.log('Notes:', data);
        },
        error: (error) => {
          console.error('Error fetching notes:', error);
        }
      });
  }

  

}
