import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideStore } from '@ngrx/store';
import { vi } from 'vitest';

import { CourseCard } from './course-card';
import { EnrollmentService } from '../../services/enrollment';

describe('CourseCard', () => {

  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;
  let enrollmentService: EnrollmentService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [
        EnrollmentService,
        provideStore({})
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;

    enrollmentService = TestBed.inject(EnrollmentService);

    component.course = {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'pending'
    };

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display course name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Angular');
  });

  it('should emit enrollRequested when enrolling', () => {

    const emitSpy = vi.spyOn(component.enrollRequested, 'emit');

    component.enrollCourse();

    expect(emitSpy).toHaveBeenCalledWith(1);

  });

  it('should unenroll if already enrolled', () => {

    enrollmentService.enroll(1);

    const unenrollSpy = vi.spyOn(enrollmentService, 'unenroll');

    component.enrollCourse();

    expect(unenrollSpy).toHaveBeenCalledWith(1);

  });

  it('should log when input changes', () => {

    const logSpy = vi.spyOn(console, 'log');

    component.ngOnChanges({});

    expect(logSpy).toHaveBeenCalledWith('Course Input Changed');

    logSpy.mockRestore();

  });

});