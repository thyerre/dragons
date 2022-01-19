import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/screens/auth/auth.service';

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

  saveRegister(): void {

  }

  toLogin(): void {
    this.authService.setCard('login');
  }
}
