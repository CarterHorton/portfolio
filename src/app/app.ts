import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadBar } from './components/head-bar/head-bar';
import { PrimaryButton } from './components/primary-button/primary-button';
import { SecondaryButton } from './components/secondary-button/secondary-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadBar, PrimaryButton,SecondaryButton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
