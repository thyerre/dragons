import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Dragon } from '../dragon.interfaces';
import { DragonService } from '../dragon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  dragon: Dragon = {} as Dragon;

  constructor(
    private dragonService: DragonService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getDragon();
  }

  getDragon(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.dragonService.getById(id).subscribe({
        next: (dragon: Dragon) => {
          this.dragon = dragon;
        }
      });
    }
  }
}
