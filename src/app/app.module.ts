import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CardLoginComponent } from './components/card-login/card-login.component';
import { CardNewRegisterComponent } from './components/card-new-register/card-new-register.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { AuthComponent } from './screens/auth/auth.component';
import { DetailComponent } from './screens/dragon/detail/detail.component';
import { DragonComponent } from './screens/dragon/dragon.component';
import { EditComponent } from './screens/dragon/edit/edit.component';
import { InsertComponent } from './screens/dragon/insert/insert.component';
import { ListComponent } from './screens/dragon/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CardLoginComponent,
    InputComponent,
    ButtonComponent,
    CardNewRegisterComponent,
    HeaderComponent,
    DragonComponent,
    ListComponent,
    DetailComponent,
    EditComponent,
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
