import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoggin: boolean;
  openModalLogin: boolean;
  openModalEdit: boolean;

  constructor(private readonly authService: AuthService) {
    this.isLoggin = this.authService.isLogged();
    this.openModalLogin = false;
    this.openModalEdit = false;
  }

  switchModalLogin() {
    this.openModalLogin = !this.openModalLogin;
  }

  switchModalEdit() {
    this.openModalEdit = !this.openModalEdit;
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }
}
