import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/screens/auth/auth.service';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss']
})
export class CardLoginComponent implements OnInit {

  form: FormGroup = {} as FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  async login(): Promise<void> {
    const isLogin = await this.storageService.verifyUserAndPassword(this.form.value);
    if (isLogin) {
      this.storageService.setMe(this.form.value)
      this.router.navigate(['home']);
    } else {
      alert('Usuário e senha não conferem!')
    }
  }

  toNewRegister(): void {
    this.authService.setCard('new-register');
  }
}
