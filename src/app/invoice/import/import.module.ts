import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceImportRoutingModule } from './import-routing.module';
import { InvoiceImportComponent } from './import.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    InvoiceImportRoutingModule,
    SharedModule
  ],
  declarations: [InvoiceImportComponent]
})
export class InvoiceImportModule { }