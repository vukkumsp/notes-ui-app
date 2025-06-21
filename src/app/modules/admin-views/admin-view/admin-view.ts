import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-view',
  standalone: false,
  templateUrl: './admin-view.html',
  styleUrl: './admin-view.css'
})
export class AdminView {

  get title(): string {
    return 'Admin View';
  }

}
