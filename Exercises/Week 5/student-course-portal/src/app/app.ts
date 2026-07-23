import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { CourseList } from './pages/course-list/course-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, CourseList, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}