import { Component, OnInit } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private router: Router
  ) { }


  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationStart)
    ).subscribe((event) => {

    })
  }
}
