import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';

import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  me: User = {} as User;

  constructor(
    private storageService: StorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.me = this.storageService.getMe();
  }

  logout(): void {
    this.storageService.removeMe();
    this.router.navigate(['auth']);
  }
}
