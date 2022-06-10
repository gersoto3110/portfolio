import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <footer class="footer">
    <span>Creado y diseñado por Gerardo Soto</span>
    <small class="copyright">2022 © All rights reserved</small>
  </footer>`,
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor() {}
}
