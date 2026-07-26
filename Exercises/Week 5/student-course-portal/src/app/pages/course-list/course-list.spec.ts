import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideStore } from '@ngrx/store';
import { provideRouter } from '@angular/router';

import { CourseList } from './course-list';
import { CourseService } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';

describe('CourseList', () => {

  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CourseList],
      providers: [
        provideStore({}),
        provideRouter([]),
        CourseService,
        EnrollmentService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;

    fixture.detectChanges();
    await fixture.whenStable();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});