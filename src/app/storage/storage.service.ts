import { Injectable } from '@angular/core';

//Esse service foi criado para controlar o login na aplicação servindo com uma API
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  saveUsers(value: any): void {
    localStorage.setItem('users', JSON.stringify(value));
    delete value.repeat_password;
    this.setMe(value);
  }

  setMe(value: any): void {
    localStorage.setItem('me', JSON.stringify(value));
  }

  getUsers(): any {
    const users = localStorage.getItem('users');

    if (users) {
      return JSON.parse(users);
    }

    return false;
  }

  async verifyUserAndPassword({ user, password }: any): Promise<boolean> {
    return new Promise((resolve) => {
      const users = this.getUsers();
      if (users.user === user && users.password === password) {
        resolve(true);
      }

      resolve(false);
    });
  }
}
