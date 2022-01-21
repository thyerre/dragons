import { Dragon } from './dragon.interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  constructor(
    private http: HttpClient
  ) { }

  getDragons(): Observable<Dragon[]> {
    return this.http.get<Dragon[]>(`${API_URL}/dragon`);
}
}
