import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';

import { Dragon } from './dragon.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  constructor(
    private http: HttpClient
  ) { }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${API_URL}/dragon/${id}`);
  }

  index(): Observable<Dragon[]> {
    return this.http.get<Dragon[]>(`${API_URL}/dragon`);
  }
}
