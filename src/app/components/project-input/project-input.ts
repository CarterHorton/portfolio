import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-input',
  imports: [FormsModule],
  templateUrl: './project-input.html',
  styleUrl: './project-input.scss',
})
export class ProjectInput {
  heading = ""
  paragraph = ""
}
