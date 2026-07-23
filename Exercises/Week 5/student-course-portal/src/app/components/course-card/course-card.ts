import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input() course!: {
    id: number;
    name: string;
    code: string;
    credits: number;
  };

  @Output() enrollRequested = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {

    console.log('Course Input Changed');

    console.log('Previous Value:', changes['course']?.previousValue);

    console.log('Current Value:', changes['course']?.currentValue);

  }

  enrollCourse() {
    this.enrollRequested.emit(this.course.id);
  }

}