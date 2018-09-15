import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BillingComponent} from './billing.component';

const routes: Routes = [
  {
    path: '',
    component: BillingComponent,
    data: {
      breadcrumb: 'Billing',
      icon: 'icofont-home bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
