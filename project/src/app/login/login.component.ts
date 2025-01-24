import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service'; // Import the DataService
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginMessage: string = ''; // To show login message

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {}

 
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Fetch users and check credentials
      this.dataService.getUsers().subscribe(users => {
        const user = users.find((u: any) => u.email === email && u.password === password);

        if (user) {
           this.loginMessage = 'Login successful!';
            // Store user email in localStorage
            localStorage.setItem('userEmail', user.email); // To track login session
            localStorage.setItem('userRole', user.role); 
          // Redirect based on role
          if (user.role === 'user') {
            this.router.navigate(['/user-dashboard']);
          } else if (user.role === 'trainer') {
            this.router.navigate(['/trainer-dashboard']);
          }
        } else {
          this.loginMessage = 'Invalid credentials!';
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
