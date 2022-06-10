import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css'],
})
export class HeroImageComponent {
  @Input() bgImageUrl!: string;
  @Input() bgAttachment!: string;
  @Input() opacityColor!: string;

  constructor() {}
}
