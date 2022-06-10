import { Component, Input } from '@angular/core';
import { IProfile, ISkill } from 'src/app/interface/IProfileDetails';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() profile!: IProfile;
  @Input() skills!: Array<ISkill>;
  categories = [
    {
      name: "desarrollo",
      value: "development"
    },
    {
      name: "herramientas",
      value: "tools"
    },
    {
      name: "diseño",
      value: "design"
    },
    {
      name: "soft",
      value: "soft",
    }
  ]
  categorySelected: string = this.categories[0].value;
  constructor() { }

  onSelected(category: string) {
    this.categorySelected = category;
  }
}
