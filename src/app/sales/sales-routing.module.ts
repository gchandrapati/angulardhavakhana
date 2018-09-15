import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SalesComponent} from './sales.component';

const routes: Routes = [
  {
    path: '',
    component: SalesComponent,
    data: {
      breadcrumb: 'Sales',
      icon: 'icofont-home bg-c-blue',
      status: false
    },
    children: [
      {
        path: 'quicksale',
        loadChildren: './quicksale/quicksale.module#QuickSaleModule'
      },
      {
        path: 'billing',
        loadChildren: './billing/billing.module#BillingModule'
      },
      {
        path: 'history',
        loadChildren: './history/history.module#HistoryModule'
      },
      {
        path: 'return-stock',
       loadChildren: './return-stock/return-stock.module#ReturnStockModule'
       //loadChildren: './history/history.module#HistoryModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
