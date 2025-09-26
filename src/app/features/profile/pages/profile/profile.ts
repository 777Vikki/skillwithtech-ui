import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [NgFor, NgIf, DatePipe],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  user = {
    name: 'Vivek Kumar Maurya',
    jobTitle: 'Angular Developer',
    location: 'Noida, India',
    phone: '+91-8574998039',
    linkedin: 'www.linkedin.com/in/vivek777',
    github: 'https://github.com/777Vikki',
    email: 'vkmm777@gmail.com',
    skills: ['Angular 8-19', 'RxJS', 'NgRx', 'SCSS', 'HTML', 'JavaScript', 'TypeScript', 'REST API', 'Unit Testing'],
    department: 'Frontend',
    dob: new Date('1993, 10, 7'),
    experience: 6,
    employeeId: 'EMP12345',

    experienceDetails: [
      {
        company: 'CdODd4 Solutions – Noida',
        location: 'Noida',
        duration: 'Apr 2019 – Mar 2021',
        projects: [
          {
            projectName: 'Task Management System',
            role: 'Frontend Developer (Angular)',
            description: 'Developed a task management system for airline operations.',
            responsibilities: [
              'Built and maintained task-related components using Angular and SCSS.',
              'Implemented NgRx to manage application state for tasks, filters, and user data.',
              'Integrated RESTful APIs for task CRUD operations and user authentication.',
            ],
          }
        ],
        open: false // 👈 Add this property
      },
      {
        company: 'Dewsd Solutions Pvt Ltd – Gurugram',
        location: 'Gurugram',
        duration: 'Apr 2021 – Apr 2025',
        projects: [
          {
            projectName: 'Company Management System',
            role: 'Frontend Developer (Angular)',
            description: 'Developed a management system to handle third-party vendors and partners.',
            responsibilities: [
              'Designed and developed core modules like Employee Management, Role Assignment, and Department Setup.',
              'Implemented NgRx Store, Effects, and Selectors to manage application state effectively.',
              'Handled API integration, error handling, and interceptor logic for secure communication.',
            ],
          }
        ],
        open: false // 👈 Add this property
      }
    ]
  };
}
