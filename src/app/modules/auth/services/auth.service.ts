import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.url}/users`;
  }

  signUp(params: object) {
    return this.http.post(`${this.url}/create`, params).pipe(
      map((data) => {
        return data;
      })
    );
  }

  signIn(params: object) {
    return this.http.post(`${this.url}/auth`, params).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
