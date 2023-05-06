import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { map } from 'rxjs';
import { signUpUserDTO } from '../DTOs/signUpUserDTO';
import { signInUserDTO } from '../DTOs/signInUserDTO';
import { User } from '../../user/models/User';
import jwt_decode from 'jwt-decode';

interface AuthResponse {
  username: string;
  email: string;
  password: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.url}/users`;
  }

  signUp(input: signUpUserDTO) {
    return this.http.post<AuthResponse>(`${this.url}/create`, input).pipe(
      map((data) => {
        sessionStorage.setItem('token', data.token);
        return data;
      })
    );
  }

  signIn(input: signInUserDTO) {
    return this.http.post<AuthResponse>(`${this.url}/auth`, input).pipe(
      map((data) => {
        sessionStorage.setItem('token', data.token);
        return data;
      })
    );
  }

  logout() {
    sessionStorage.removeItem('token');
  }

  isAuthenticated() {
    return !!sessionStorage.getItem('token');
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  getUserIdFromToken() {
    const decodedToken: any = jwt_decode(sessionStorage.getItem('token')!);
    return decodedToken.sub.userId;
  }
}
