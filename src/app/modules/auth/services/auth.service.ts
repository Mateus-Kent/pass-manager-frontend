import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { map } from 'rxjs';
import { signUpUserDTO } from '../DTOs/signUpUserDTO';
import { signInUserDTO } from '../DTOs/signInUserDTO';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.url}/users`;
  }

  signUp(input: signUpUserDTO) {
    return this.http.post(`${this.url}/create`, input).pipe(
      map((data) => {
        return data;
      })
    );
  }

  signIn(input: signInUserDTO) {
    return this.http.post(`${this.url}/auth`, input).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
