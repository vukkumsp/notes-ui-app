import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authService/auth-service';
import { NotesService } from '../../services/notesService/notes-service';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

    constructor(private authService: AuthService, private notesService: NotesService, private router: Router) {
      // Initialization logic can go here
    }
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

    goToLogin() {
  this.router.navigate(['/login']);
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
      this.router.navigate(['/login']);
    }
}
