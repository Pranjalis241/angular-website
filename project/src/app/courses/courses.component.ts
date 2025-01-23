import { Component } from '@angular/core';
import { DataService } from '../data.service'; //import service
 
@Component({
  selector: 'app-courses',
  standalone: false,
  
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent  {
  courses: any[] = [];
  filteredCourses: any[] = []; //to search course
  searchQuery: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAllCourses().subscribe(data => {
      this.courses = data;
      this.filteredCourses = data;
    });
  }
  filterCourses(): void {
    this.filteredCourses = this.courses.filter(course =>
      course.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}