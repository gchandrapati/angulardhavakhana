import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuicksaleComponent} from './quicksale.component'

const routes: Routes = [
  {
    path: '',
    component: QuicksaleComponent,
    data: {
      breadcrumb: 'Quick Sales',
      icon: 'icofont-home bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuickSaleRoutingModule { }
