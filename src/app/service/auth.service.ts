import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interface/IUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl: string =
    'https://limitless-castle-20772.herokuapp.com/api/';

  private readonly key: string = 'admin';
  constructor(private readonly http: HttpClient) {}

  private getUserByEmail(email: string): Observable<IUser | null> {
    const url = `${this.apiUrl}/user/find-email/${email}`;
    return this.http.get<IUser | null>(url);
  }

  login(user: IUser) {
    this.getUserByEmail(user.email).subscribe((userDB) => {
      if (!userDB || userDB.password !== user.password) {
        window.alert('Credenciales inválidas');
        return;
      }
      sessionStorage.setItem('isLogged', this.key);
      window.location.reload();
      window.alert('Has iniciado sesión');
    });
  }

  isLogged(): boolean {
    const keyLogged = sessionStorage.getItem('isLogged');
    if (!keyLogged) return false;
    if (keyLogged !== this.key) return false;
    return true;
  }

  logout(): void {
    sessionStorage.removeItem('isLogged');
  }
}
