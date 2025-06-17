import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { API_URLS } from '../../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }

  getNotes() {
    return this.http.get(API_URLS.NOTES.GET_ALL);
  }
}
