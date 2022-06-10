import { Component, Input } from '@angular/core';
import { IProfile } from 'src/app/interface/IProfileDetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() profile!: IProfile;
  constructor() { }
}
