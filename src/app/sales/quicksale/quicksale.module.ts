import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuickSaleRoutingModule } from './quicksale-routing.module';
import { QuicksaleComponent } from './quicksale.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    QuickSaleRoutingModule,
    SharedModule
  ],
  declarations: [QuicksaleComponent]
})
export class QuickSaleModule { }
