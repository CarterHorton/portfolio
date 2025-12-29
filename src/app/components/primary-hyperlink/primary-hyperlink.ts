import { Component, input } from '@angular/core';

@Component({
  selector: 'app-primary-hyperlink',
  imports: [],
  templateUrl: './primary-hyperlink.html',
  styleUrl: './primary-hyperlink.scss',
})
export class PrimaryHyperlink {
  link = input<String>('', {alias: 'href'});
}
