import { Injectable } from '@angular/core';

import { User } from '../../interfaces/user.interface';

//Esse service foi criado para controlar o login na aplicação servindo com uma API
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  saveUsers(value: User): void {
    localStorage.setItem('users', JSON.stringify(value));
    delete value.repeat_password;
    this.setMe(value);
  }

  setMe(value: User): void {
    localStorage.setItem('me', JSON.stringify(value));
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);

    if (item) {
      return JSON.parse(item);
    }

    return false;
  }

  getMe(): User {
    return this.getItem("me");
  }

  removeMe(): void {
    localStorage.removeItem("me");
  }

  getUsers(): User | boolean {
    return this.getItem("users");
  }

  async verifyUserAndPassword({ user, password }: User): Promise<boolean> {
    return new Promise((resolve) => {
      const users = this.getUsers();
      if (typeof users == "object") {
        if (users.user === user && users.password === password) {
          resolve(true);
        }
      }
      resolve(false);
    });
  }
}
