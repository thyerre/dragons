import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  card: string = "login";

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.syncCard();
  }

  syncCard(): void {
    this.authService.authCard.subscribe((card: string) => {
      this.card = card;
    })
  }
}
