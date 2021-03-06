import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DragonService } from 'src/app/services/dragon.service';

import { Dragon } from '../../../interfaces/dragon.interface';

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
