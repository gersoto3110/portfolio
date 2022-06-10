import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const dataUrls = {
  education: '/education',
  experience: '/experience',
  profile: '/profile',
  project: '/project',
  skill: '/skill',
  user: '/user',
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl: string = 'https://limitless-castle-20772.herokuapp.com/api/';

  constructor(private readonly http: HttpClient) {}

  getAll(dataUrl: string): Observable<any> {
    const url = `${this.apiUrl}${dataUrl}/all`;
    return this.http.get<any[]>(url);
  }

  getById(dataUrl: string, id: number): Observable<any> {
    const url = `${this.apiUrl}${dataUrl}/find/${id}`;
    return this.http.get<any>(url);
  }

  add(dataUrl: string, data: any): Observable<any> {
    const url = `${this.apiUrl}${dataUrl}/add`;
    return this.http.post<any>(url, data);
  }

  deleteById(dataUrl: string, id: number): Observable<any> {
    const url = `${this.apiUrl}${dataUrl}/delete/${id}`;
    return this.http.delete<any>(url);
  }

  getUserByEmail(email: string): Observable<any> {
    const url = `${this.apiUrl}${dataUrls.user}/find-email/${email}`;
    return this.http.get(url);
  }
}
