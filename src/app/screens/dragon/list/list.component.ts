import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DragonService } from 'src/app/services/dragon.service';

import { Dragon } from '../../../interfaces/dragon.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  form: FormGroup = {} as FormGroup;
  listDragons: Dragon[] = [];
  allDragons: Dragon[] = [];
  typingTimer: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private dragonService: DragonService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getDragons();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      search: new FormControl(''),
    });
    this.searchInput();
  }

  getDragons(): void {
    this.dragonService.index().subscribe({
      next: (dragons: Dragon[]) => {
        this.allDragons = this.orderList(dragons);
        this.listDragons = this.allDragons;
      }
    });
  }

  searchInput(): void {
    this.form.get('search')?.valueChanges.subscribe((term: string) => {
      clearTimeout(this.typingTimer);
      this.typingTimer = setTimeout(() => this.filterDragons(term), 800);
    })
  }

  filterDragons(term: string): void {
    this.listDragons = this.allDragons.filter((elem) => elem.name.includes(term) || elem.type.includes(term))
  }

  deleteDragon(id: string): void {
    if (confirm("Do you really want to delete this dragon?")) {
      this.dragonService.delete(id).subscribe({
        next: () => {
          this.listDragons = this.listDragons.filter((elem) => elem.id !== id);
          this.allDragons = this.allDragons.filter((elem) => elem.id !== id);
        }
      });
    }
  }

  orderList(list: Dragon[]): Dragon[] {
    return list.sort((a, b) => a.name.localeCompare(b.name) )
  }
}
