import { Injectable } from '@angular/core';
import { Course as CourseModel } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: CourseModel[] = [

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

  getCourses(): CourseModel[] {

    return this.courses;

  }

  getCourseById(id: number): CourseModel | undefined {

    return this.courses.find(course => course.id === id);

  }

  addCourse(course: CourseModel): void {

    this.courses.push(course);

  }

}