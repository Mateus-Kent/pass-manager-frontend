import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.url}/users`;
  }

  obtain(id: number) {
    return this.http.get(`${this.url}/getUser/${id}`).pipe(
      map((data) => {
        return data;
      })
    );
  }

  update(id: number, params: Object) {
    return this.http.put(`${this.url}/update/${id}`, params).pipe(
      map((data) => {
        return data;
      })
    );
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/delete/${id}`).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
