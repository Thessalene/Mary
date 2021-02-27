import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedGedRoutingModule } from './shared-ged-routing.module';
import { DatePipe } from './pipes/date.pipe';


@NgModule({
  declarations: [DatePipe],
  imports: [
    CommonModule,
    SharedGedRoutingModule
  ],
  exports: [DatePipe]
})
export class SharedGedModule { }
