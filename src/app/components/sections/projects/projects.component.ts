import { Component, Input } from '@angular/core';
import { IProject } from 'src/app/interface/IProfileDetails';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  @Input() projects!: Array<IProject>
  constructor() {}
}
