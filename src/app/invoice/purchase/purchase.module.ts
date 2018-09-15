import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    SharedModule
  ],
  declarations: [PurchaseComponent]
})
export class PurchaseModule { }