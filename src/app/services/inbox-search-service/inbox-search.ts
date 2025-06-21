import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InboxSearch {

  private searchTermSignal = signal<string>('');

  readonly searchTerm = this.searchTermSignal.asReadonly();

  updateSearchTerm(newSearchTerm: string){
    this.searchTermSignal.set(newSearchTerm);
  }

  constructor() { }
}
