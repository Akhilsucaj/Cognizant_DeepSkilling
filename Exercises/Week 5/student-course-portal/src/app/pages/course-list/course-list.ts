import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA201',
      credits: 3,
      gradeStatus: 'failed'
    },
    {
      id: 3,
      name: 'Spring Boot',
      code: 'SPR301',
      credits: 5,
      gradeStatus: 'pending'
    },
    {
      id: 4,
      name: 'Python',
      code: 'PY401',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 5,
      name: 'Machine Learning',
      code: 'ML501',
      credits: 5,
      gradeStatus: 'pending'
    }
  ];

  selectedCourseId = 0;

  ngOnInit(): void {

  console.log("Before:", this.isLoading);

  setTimeout(() => {
    this.isLoading = false;
    console.log("After:", this.isLoading);
  }, 1500);

}

  onEnroll(courseId: number): void {

  alert("Course ID: " + courseId);

  this.selectedCourseId = courseId;

}

  // trackBy improves performance by reusing DOM elements
  // instead of recreating every item whenever the array changes.
  trackByCourseId(index: number, course: any): number {
    return course.id;
  }

}