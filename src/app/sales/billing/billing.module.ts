import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BillingRoutingModule,
    SharedModule
  ],
  declarations: [BillingComponent]
})
export class BillingModule { }
