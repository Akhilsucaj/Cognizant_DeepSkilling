import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses = [

    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4
    },

    {
      id: 2,
      name: 'Java',
      code: 'JAVA201',
      credits: 3
    },

    {
      id: 3,
      name: 'Spring Boot',
      code: 'SPR301',
      credits: 5
    },

    {
      id: 4,
      name: 'Python',
      code: 'PY401',
      credits: 4
    },

    {
      id: 5,
      name: 'Machine Learning',
      code: 'ML501',
      credits: 5
    }

  ];

  selectedCourseId = 0;

  onEnroll(courseId: number) {

    console.log('Enrolling in course: ' + courseId);

    this.selectedCourseId = courseId;

  }

}