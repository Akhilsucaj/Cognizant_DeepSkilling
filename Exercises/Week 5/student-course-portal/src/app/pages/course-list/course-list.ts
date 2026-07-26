import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCard
],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses: Course[] = [];

  selectedCourseId = 0;

  searchTerm = '';

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.courses = this.courseService.getCourses();

    const search = this.route.snapshot.queryParamMap.get('search');

    if (search) {
      this.searchTerm = search;
      this.courses = this.courses.filter(course =>
        course.name.toLowerCase().includes(search.toLowerCase()) ||
        course.code.toLowerCase().includes(search.toLowerCase())
      );
    }

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);

  }

  onEnroll(courseId: number): void {

    alert('Course ID: ' + courseId);

    this.selectedCourseId = courseId;

  }

  viewCourse(courseId: number): void {

    this.router.navigate(['courses', courseId]);

  }

  searchCourses(): void {

    this.router.navigate(
      ['courses'],
      {
        queryParams: {
          search: this.searchTerm || null
        }
      }
    );

  }

  trackByCourseId(index: number, course: Course): number {

    return course.id;

  }

}