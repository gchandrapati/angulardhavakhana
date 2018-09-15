import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderHistoryRoutingModule } from './order-history-routing.module';
import { OrderHistoryComponent } from './order-history.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    OrderHistoryRoutingModule,
    SharedModule
  ],
  declarations: [OrderHistoryComponent]
})
export class OrderHistoryModule { }
