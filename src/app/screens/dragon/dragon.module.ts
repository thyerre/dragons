import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonRoutingModule } from './dragon-routing.module';
import { DragonComponent } from './dragon.component';
import { HeaderComponent } from 'src/app/components/header/header.component';


@NgModule({
  declarations: [
    DragonComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    DragonRoutingModule
  ]
})

export class DragonModule { }
