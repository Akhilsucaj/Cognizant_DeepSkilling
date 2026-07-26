import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Store } from '@ngrx/store';

import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';

import * as CourseActions from '../../store/course/course.actions';
import { selectAllCourses } from '../../store/course/course.selectors';

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
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.store.dispatch(
      CourseActions.loadCourses()
    );

    this.route.queryParamMap.subscribe(params => {

      const search = params.get('search');

      this.store.select(selectAllCourses).subscribe(courses => {

        this.courses = courses;

        if (search) {

          this.searchTerm = search;

          this.courses = courses.filter(course =>

            course.name
              .toLowerCase()
              .includes(search.toLowerCase())

            ||

            course.code
              .toLowerCase()
              .includes(search.toLowerCase())

          );

        }

        this.isLoading = false;

      });

    });

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