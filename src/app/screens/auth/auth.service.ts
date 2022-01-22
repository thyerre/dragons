import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authCard = new EventEmitter<string>();

  setCard(card: string): void {
    this.authCard.emit(card);
  }
}
