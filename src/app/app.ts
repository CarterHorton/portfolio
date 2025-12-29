import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadBar } from './components/head-bar/head-bar';
import { PrimaryButton } from './components/primary-button/primary-button';
import { SecondaryButton } from './components/secondary-button/secondary-button';
import { PrimaryHyperlink } from './components/primary-hyperlink/primary-hyperlink';
import { SecondaryHyperlink } from './components/secondary-hyperlink/secondary-hyperlink';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadBar, SecondaryHyperlink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
