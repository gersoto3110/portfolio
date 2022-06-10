import { Component, Input } from '@angular/core';
import { IProject } from 'src/app/interface/IProfileDetails';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  @Input() project!: IProject
  constructor() { }
}
