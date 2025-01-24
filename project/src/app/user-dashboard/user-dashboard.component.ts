import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Router } from '@angular/router';
import { DataService } from '../data.service'; // Import the DataService

@Component({
  selector: 'app-user-dashboard',
  standalone: false,
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  user: any; // To store the logged-in user's details
  purchasedCourses = [
    { title: 'Angular Basics', status: 'Completed' },
    { title: 'Advanced JavaScript', status: 'In Progress' },
    { title: 'Python for Data Science', status: 'Not Started' }
  ];

  students = [
    { name: 'Karan', email: 'k@gmail.com', course: 'Angular Basics' },
    { name: 'Riya', email: 'riya@example.com', course: 'Advanced JavaScript' },
    { name: 'Rohit', email: 'rohit@example.com', course: 'Python for Data Science' }
  ];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.loadUserData();
    this.loadProgressChart();
  }

  loadUserData() {
    const userEmail = localStorage.getItem('userEmail'); // Assuming email is stored during login
    if (userEmail) {
      this.dataService.getUsers().subscribe(
        (users) => {
          this.user = users.find((u: any) => u.email === userEmail);
          if (!this.user) {
            alert('User not found');
            this.router.navigate(['/login']);
          }
        },
        (error) => {
          console.error('Error fetching user data:', error);
          alert('Failed to load user data');
        }
      );
    } else {
      alert('No user logged in');
      this.router.navigate(['/login']);
    }
  }

  loadProgressChart() {
    new Chart('progressChart', {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'In Progress', 'Not Started'],
        datasets: [
          {
            label: 'Progress',
            data: [40, 30, 30], // Example values
            backgroundColor: ['#4caf50', '#ff9800', '#f44336']
          }
        ]
      }
    });
  }
}
