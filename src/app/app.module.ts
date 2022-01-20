import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CardLoginComponent } from './components/card-login/card-login.component';
import { CardNewRegisterComponent } from './components/card-new-register/card-new-register.component';
import { InputComponent } from './components/input/input.component';
import { AuthComponent } from './screens/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CardLoginComponent,
    InputComponent,
    ButtonComponent,
    CardNewRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
