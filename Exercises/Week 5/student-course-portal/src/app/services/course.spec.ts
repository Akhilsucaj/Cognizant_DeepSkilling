import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { CourseService } from './course';
import { Course } from '../models/course.model';

describe('CourseService', () => {

  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Java Programming',
      code: 'CS102',
      credits: 3,
      gradeStatus: 'pending'
    }
  ];

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return courses', () => {

    service.getCourses().subscribe(courses => {

      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses);

    });

    const req = httpMock.expectOne('http://localhost:3000/courses');

    expect(req.request.method).toBe('GET');

    req.flush(mockCourses);

  });

  it('should handle server error', () => {

    service.getCourses().subscribe({

      next: () => fail('Expected an error'),

      error: (error) => {
        expect(error.message)
          .toBe('Failed to load courses. Please try again.');
      }

    });

    // First request
    httpMock.expectOne('http://localhost:3000/courses')
      .flush('Server Error', {
        status: 500,
        statusText: 'Internal Server Error'
      });

    // Retry #1
    httpMock.expectOne('http://localhost:3000/courses')
      .flush('Server Error', {
        status: 500,
        statusText: 'Internal Server Error'
      });

    // Retry #2
    httpMock.expectOne('http://localhost:3000/courses')
      .flush('Server Error', {
        status: 500,
        statusText: 'Internal Server Error'
      });

  });

});