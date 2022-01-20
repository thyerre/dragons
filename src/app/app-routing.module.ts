import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './screens/auth/auth.component';
import { AlterComponent } from './screens/dragon/alter/alter.component';
import { DetailComponent } from './screens/dragon/detail/detail.component';
import { DragonComponent } from './screens/dragon/dragon.component';
import { InsertComponent } from './screens/dragon/insert/insert.component';
import { ListComponent } from './screens/dragon/list/list.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: "dragons",
    component: DragonComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'list',
        component: ListComponent,
        outlet: 'view'
      },
      {
        path: 'insert',
        component: InsertComponent,
        outlet: 'view'
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
        outlet: 'view'
      },
      {
        path: 'alter/:id',
        component: AlterComponent,
        outlet: 'view'
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
