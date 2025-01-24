import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(private router: Router) {}

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('userEmail'); // Returns true if userEmail exists in localStorage
  }

  // Handle logout
  logout(): void {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userRole');
    this.router.navigate(['/home']); // Redirect to home page
  }
}
