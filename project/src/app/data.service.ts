import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/contacts';  // for contacts data
  private usersUrl = 'http://localhost:3000/users';  // for users data

  constructor(private http: HttpClient) {}

  // Method to add a new contact
  addItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  // Method to get all contacts
  getContacts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Method to add a new user
  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.usersUrl, user);
  }

  // Method to get all users
  getUsers(): Observable<any> {
    return this.http.get<any>(this.usersUrl);
  }
}