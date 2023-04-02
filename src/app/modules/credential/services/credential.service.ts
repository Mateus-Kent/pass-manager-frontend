import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class CredentialService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.url}/credentials`;
  }

  register(params: object) {
    return this.http.post(`${this.url}/create`, params).pipe(
      map((data) => {
        return data;
      })
    );
  }

  obtain(id: number) {
    return this.http.get(`${this.url}/getCredential/${id}`).pipe(
      map((data) => {
        return data;
      })
    );
  }

  list() {
    return this.http.get(`${this.url}/getCredentials`).pipe(
      map((data) => {
        return data;
      })
    );
  }

  update(id: number, params: Object) {
    return this.http.put(`${this.url}/updateCredential/${id}`, params).pipe(
      map((data) => {
        return data;
      })
    );
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/deleteCredential/${id}`).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
