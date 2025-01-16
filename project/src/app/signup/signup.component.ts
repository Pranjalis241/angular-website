import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
 
@Component({
  selector: 'app-signup',
  standalone: false,
 
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm!: FormGroup;
 
  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
  }
 
  createForm() {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      // phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      role: ['', Validators.required],
      phone: [
        '',
        [        
          Validators.pattern(/^\d{10}$/) // Regex for exactly 10 numeric digits
        ]
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    }, { validator: this.mustMatch('password', 'confirmPassword') });
  }
 
  mustMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmPassword];
 
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }
 
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
 
  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Submitted!', this.signupForm.value);
      this.router.navigate(['/login']);
    }
  }
}
 