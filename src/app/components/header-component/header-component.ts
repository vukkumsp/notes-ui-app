import { Component } from '@angular/core';
import { AuthService } from '../../services/authService/auth-service';
import { NotesService } from '../../services/notesService/notes-service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {

    constructor(private authService: AuthService, private notesService: NotesService) {
      // Initialization logic can go here
    }

    login(){
      this.authService.login('admin', 'admin');
    }
  
    getNotes() {
      this.notesService.getNotes().subscribe({
        next: (data) => {
          console.log('Notes:', data);
        },
        error: (error) => {
          console.error('Error fetching notes:', error);
        }
      });
    }

    logout(){
      this.authService.logout();
    }
}
