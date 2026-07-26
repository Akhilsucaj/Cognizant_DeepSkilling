import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course as CourseModel } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses: CourseModel[] = [];

  selectedCourseId = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {

    this.courses = this.courseService.getCourses();

    setTimeout(() => {

      this.isLoading = false;

    }, 1500);

  }

  onEnroll(courseId: number): void {

    alert('Course ID: ' + courseId);

    this.selectedCourseId = courseId;

  }

  trackByCourseId(index: number, course: CourseModel): number {

    return course.id;

  }

}