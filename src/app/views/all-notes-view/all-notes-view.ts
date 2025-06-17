import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NoteComponent } from "../../components/note-component/note-component";
import { AuthService } from '../../services/authService/auth-service';
import { NotesService } from '../../services/notesService/notes-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-notes-view',
  imports: [NoteComponent, CommonModule],
  templateUrl: './all-notes-view.html',
  styleUrl: './all-notes-view.css'
})
export class AllNotesView implements OnInit {

  notes: any[] = [];

  constructor(private authService: AuthService, private notesService: NotesService, private cdr: ChangeDetectorRef) {
    // Initialization logic can go here
  }

  ngOnInit(): void {
    // Fetch notes from a service or initialize them here
    if(this.authService.getAuthToken() != null 
        && this.authService.getAuthToken() != "") {
      this.notesService.getNotes().subscribe({
        next: (data: any) => {
          console.log(' Notes fetched:', data);
          this.notes = data; // Assuming data is an array of notes
          this.cdr.markForCheck();
        },
        error: (error) => {
          console.error('Error fetching notes:', error);
        }
      });
    }
  }
}
