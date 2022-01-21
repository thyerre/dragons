import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Dragon } from './../dragon.interfaces';
import { DragonService } from './../dragon.service';

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
    this.dragonService.getDragons().subscribe({
      next: (dragons: Dragon[]) => {
        this.listDragons = dragons;
        this.allDragons = dragons;
      }
    });
  }

  searchInput(): void {
    this.form.get('search')?.valueChanges.subscribe((term: string) => {
      clearTimeout(this.typingTimer);
      this.typingTimer = setTimeout(() => this.filterDragons(term), 1000);
    })
  }

  filterDragons(term: string): void {
    this.listDragons = this.allDragons.filter((elem) => elem.name.includes(term) || elem.type.includes(term))
  }
}
