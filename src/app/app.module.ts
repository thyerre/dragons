import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardLoginComponent } from './components/card-login/card-login.component';
import { InputComponent } from './components/input/input.component';
import { AuthComponent } from './screens/auth/auth.component';
import { HomeComponent } from './screens/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { CardNewRegisterComponent } from './components/card-new-register/card-new-register.component';
import { ListComponent } from './screens/home/list/list.component';
import { DetailComponent } from './screens/home/detail/detail.component';
import { AlterComponent } from './screens/home/alter/alter.component';
import { InsertComponent } from './screens/home/insert/insert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    CardLoginComponent,
    InputComponent,
    ButtonComponent,
    CardNewRegisterComponent,
    ListComponent,
    DetailComponent,
    AlterComponent,
    InsertComponent
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
