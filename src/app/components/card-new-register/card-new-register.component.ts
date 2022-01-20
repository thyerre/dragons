import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/app.interfaces';
import { AuthService } from 'src/app/screens/auth/auth.service';

import { StorageService } from './../../storage/storage.service';

@Component({
  selector: 'app-card-new-register',
  templateUrl: './card-new-register.component.html',
  styleUrls: ['./card-new-register.component.scss']
})
export class CardNewRegisterComponent implements OnInit {

  form: FormGroup = {} as FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repeat_password: new FormControl('', Validators.required),
    });
  }

  async verifyPasswordEqual({ password, repeat_password }: User): Promise<boolean> {
    return new Promise((resolve) => {
      if (password !== repeat_password) {
        resolve(false);
      }

      resolve(true);
    });
  }

  async saveNewRegister(): Promise<void> {
    const values = this.form.value;

    if (await this.verifyPasswordEqual(values)) {
      this.storageService.saveUsers(values);
      this.router.navigate(['home']);
    } else {
      alert('As senhas devem ser iguais!')
    }
  }

  toLogin(): void {
    this.authService.setCard('login');
  }
}
