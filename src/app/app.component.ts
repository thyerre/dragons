import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dragons';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggin();
  }

  isLoggin(): void {
    // this.router.navigate(['home']);
  }
}
