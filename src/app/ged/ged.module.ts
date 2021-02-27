import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GedRoutingModule } from './ged-routing.module';
import { SharedGedModule } from './shared-ged/shared-ged.module';
import { SearchModule } from './search/search.module';
import { DepositModule } from './deposit/deposit.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GedRoutingModule,
    SharedGedModule,
    SearchModule,
    DepositModule
  ]
})
export class GedModule { }
