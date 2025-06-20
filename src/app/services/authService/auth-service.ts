import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../constants/api.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  storage: any = localStorage; // Use sessionStorage for temporary storage

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    // Implement your authentication logic here
    // For example, check if a token exists in local storage
    const token = this.storage.getItem('authToken');
    return !!token; // Returns true if token exists, false otherwise
  }

  login(username: string, password: string) {
    this.http.post(API_URLS.AUTH.LOGIN, { username, password, appName:'notes-service' })
      .subscribe({
        next: (response: any) => {
          console.log('Login successful:', response);
          // Store the token in session storage or local storage
          this.storeToken(response.token); // Assuming the response contains a token
        }
        , error: (error) => {
          console.error('Login failed:', error);
          // Handle login error
          throw error; // Re-throw the error for further handling if needed
        }
      });
  }

  logout(): void {
    this.storage.removeItem('authToken');
    // this.http.post(API_URLS.AUTH.LOGOUT, {}).subscribe({
    //   next: () => {
    //     // Handle successful logout
    //     console.log('Logout successful');
    //     this.storage.removeItem('authToken'); // Remove token from storage
    //   },
    //   error: (error) => {
    //     // Handle logout error
    //     console.error('Logout failed:', error);
    //   }
    // });
  }
  private storeToken(token: string): void {
    // Store the token in session storage or local storage
    this.storage.setItem('authToken', token); // Use sessionStorage for temporary storage
    // Alternatively, you can use localStorage if you want the token to persist across sessions  
  }

  getAuthToken(): string | null {
    // Retrieve the token from storage
    return this.storage.getItem('authToken');
  }

}
