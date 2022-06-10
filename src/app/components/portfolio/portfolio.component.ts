import { Component, OnInit } from '@angular/core';
import { IProfile, IProject, ISkill } from 'src/app/interface/IProfileDetails';
import { ApiService, dataUrls } from 'src/app/service/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  profile!: IProfile
  skills!: Array<ISkill>
  projects!: Array<IProject>

  constructor(private readonly apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAll(dataUrls.profile).subscribe(profiles => this.profile = profiles[0]);
    this.apiService.getAll(dataUrls.skill).subscribe(skills => this.skills = skills);
    this.apiService.getAll(dataUrls.project).subscribe(projects => this.projects = projects);
  }

}
