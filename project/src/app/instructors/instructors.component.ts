import { Component } from '@angular/core';

@Component({
  selector: 'app-instructors',
  standalone: false,
  
  templateUrl: './instructors.component.html',
  styleUrl: './instructors.component.css'
})
export class InstructorsComponent {
  //Array of teachers
  teachers = [
    {
      name: 'John Carter',
      role: 'Digital Marketer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/image/man.jpg'
    },
    {
      name: 'Sophie Moore',
      role: 'UI/UX Designer',
      description: 'Ut et turpis et pellentesque, sollicitudin malesuada.',
      image: '/image/rahul_.jpg'
    },
    {
      name: 'Norma Hicks',
      role: 'iOS Developer',
      description: 'Ut et turpis et pellentesque, sollicitudin malesuada.',
      image: '/image/shreya-removebg-preview.jpg'
    },
    {
      name: 'Kellie Burns',
      role: 'SEO Specialist',
      description: 'Ut et turpis et pellentesque, sollicitudin malesuada.',
      image: '/image/naman-removebg-preview.jpg'
    },
    {
      name: 'Alex Paul',
      role: 'Brand Designer',
      description: 'Ut et turpis et pellentesque, sollicitudin malesuada.',
      image: '/image/teacher.jpg'
    },
    {
      name: 'Fred Owen',
      role: 'Entrepreneur',
      description: 'Ut et turpis et pellentesque, sollicitudin malesuada.',
      image: '/image/sir-removebg-preview.jpg'
    }
  ];
}
