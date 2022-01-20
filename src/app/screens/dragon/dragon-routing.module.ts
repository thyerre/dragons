import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlterComponent } from './alter/alter.component';
import { DetailComponent } from './detail/detail.component';
import { DragonComponent } from './dragon.component';
import { InsertComponent } from './insert/insert.component';

const routes: Routes = [
	{
		path: "",
		component: DragonComponent,
	},
	{
		path: "inserir",
		component: InsertComponent,
	},
	{
		path: "alterar/:id",
		component: AlterComponent,
	},
  {
		path: "detalhar/:id",
		component: DetailComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DragonRoutingModule {}
