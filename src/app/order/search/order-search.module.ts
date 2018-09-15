import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderSearchRoutingModule } from './order-search-routing.module';
import { OrderSearchComponent } from './order-search.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    OrderSearchRoutingModule,
    SharedModule
  ],
  declarations: [OrderSearchComponent]
})
export class OrderSearchModule { }
