import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderSearchComponent} from './order-search.component';

const routes: Routes = [
  {
    path: '',
    component: OrderSearchComponent,
    data: {
      breadcrumb: 'Search',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderSearchRoutingModule { }
