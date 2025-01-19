import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FreeComponent } from './free/free.component';
import { InstructorsComponent } from './instructors/instructors.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'contact', component: ContactComponent },
 
  { path: 'signup', component: SignupComponent }, // Route for Sign Up
  { path: 'login', component: LoginComponent },
  {path: 'free' , component: FreeComponent},
  {path: 'instructors' , component: InstructorsComponent},

  // { path: '**', redirectTo: '/home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
