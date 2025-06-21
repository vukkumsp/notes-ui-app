import { Component, inject } from '@angular/core';
import { InboxSearch } from '../../services/inbox-search-service/inbox-search';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search-bar-component.html',
  styleUrl: './search-bar-component.css'
})
export class SearchBarComponent {

  inboxSearchService: InboxSearch = inject(InboxSearch);

  inboxSearchBox: FormControl = new FormControl('');

  updateSearchTerm(){
    this.inboxSearchService.updateSearchTerm(this.inboxSearchBox.value);
  }

  clearSearchTerm(){
    this.inboxSearchBox.setValue('');
    this.inboxSearchService.updateSearchTerm('');
  }
}
