import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveUser(value: any): void {
    value = JSON.stringify(value);
    localStorage.setItem('users', value);
  }

}
