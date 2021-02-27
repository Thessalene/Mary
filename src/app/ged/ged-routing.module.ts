import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedGedModule } from './shared-ged/shared-ged.module';

const routes: Routes = [
  { path:"", loadChildren: () => import('./deposit/deposit.module').then(m => m.DepositModule)},
  { path:"", loadChildren: () => import('./search/search.module').then(m => m.SearchModule)},
  { path:"", component: SharedGedModule},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GedRoutingModule { }
