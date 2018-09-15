import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderComponent} from './order.component';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    data: {
      breadcrumb: 'Order',
      icon: 'icofont-home bg-c-blue',
      status: false
    },
    children: [
      {
        path: 'order-search',
        loadChildren: './search/order-search.module#OrderSearchModule'
      },
      {
        path: 'order-history',
        loadChildren: './history/order-history.module#OrderHistoryModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
