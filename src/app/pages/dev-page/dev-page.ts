import { Component } from '@angular/core';
import { ProjectInput } from "../../components/project-input/project-input";

@Component({
  selector: 'app-dev-page',
  imports: [ProjectInput],
  templateUrl: './dev-page.html',
  styleUrl: './dev-page.scss',
})
export class DevPage {

}
