import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadBar } from './components/head-bar/head-bar';
import { LoginForm } from "./components/login-form/login-form";
import { ProjectMini } from "./components/project-mini/project-mini";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadBar, ProjectMini],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
