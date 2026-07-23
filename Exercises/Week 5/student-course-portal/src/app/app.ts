import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Home, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-course-portal');
}
