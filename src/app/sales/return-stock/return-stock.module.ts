import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnStockRoutingModule } from './return-stock-routing.module';
import { ReturnStockComponent } from './return-stock.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReturnStockRoutingModule,
    SharedModule
  ],
  declarations: [ReturnStockComponent]
})
export class ReturnStockModule { }