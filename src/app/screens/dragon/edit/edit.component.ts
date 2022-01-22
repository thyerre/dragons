import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DragonService } from '../dragon.service';
import { Dragon } from './../dragon.interfaces';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  form: FormGroup = {} as FormGroup;
  id: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private dragonService: DragonService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.initForm();
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
    }
    this.getDragon();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    });
  }

  getDragon(): void {
    this.dragonService.getById(this.id).subscribe({
      next: (dragon: Dragon) => {
        this.form.patchValue(dragon);
      }
    });
  }

  update(): void {
    this.dragonService.update(this.form.value, this.id).subscribe({
      next: () => {
        if (confirm("Dragon successfully updated!")) {
          this.router.navigate(['dragons', { outlets: { view: 'list' } }]);
        }
      }
    });
  }

  clear(): void {
    this.initForm();
  }
}
