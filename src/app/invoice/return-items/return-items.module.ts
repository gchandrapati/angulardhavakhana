import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnItemsRoutingModule } from './return-items-routing.module';
import { ReturnItemsComponent } from './return-items.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReturnItemsRoutingModule,
    SharedModule
  ],
  declarations: [ReturnItemsComponent]
})
export class ReturnItemsModule { }
