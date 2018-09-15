import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule
  ],
  declarations: [HistoryComponent]
})
export class HistoryModule { }
