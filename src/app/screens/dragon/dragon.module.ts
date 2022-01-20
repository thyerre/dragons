import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonRoutingModule } from './dragon-routing.module';
import { DragonComponent } from './dragon.component';


@NgModule({
  declarations: [
    DragonComponent
  ],
  imports: [
    CommonModule,
    DragonRoutingModule
  ]
})

export class DragonModule { }
