import { Component } from '@angular/core';
import { PrimaryHyperlink } from "../primary-hyperlink/primary-hyperlink";
import { SecondaryHyperlink } from '../secondary-hyperlink/secondary-hyperlink';

@Component({
  selector: 'app-head-bar',
  imports: [PrimaryHyperlink, SecondaryHyperlink],
  templateUrl: './head-bar.html',
  styleUrl: './head-bar.scss',
})
export class HeadBar {

}
