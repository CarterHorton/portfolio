import { Component, input } from '@angular/core';

@Component({
  selector: 'app-secondary-hyperlink',
  imports: [],
  templateUrl: './secondary-hyperlink.html',
  styleUrl: './secondary-hyperlink.scss',
})
export class SecondaryHyperlink {
  link = input<String>('', {alias: 'href'});
}
