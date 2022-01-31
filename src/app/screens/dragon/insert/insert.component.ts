import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DragonService } from 'src/app/services/dragon.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  form: FormGroup = {} as FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dragonService: DragonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    });
  }

  save(): void {
    this.dragonService.save(this.form.value).subscribe({
      next: () => {
        if (confirm("Dragon successfully saved!")) {
          this.router.navigate(['dragons', {outlets: {view: 'list'}}]);
        }
      }
    });
  }

  clear(): void {
    this.initForm();
  }
}
