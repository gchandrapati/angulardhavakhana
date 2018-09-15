import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReturnStockComponent} from './return-stock.component';

const routes: Routes = [
  {
    path: '',
    component: ReturnStockComponent,
    data: {
      breadcrumb: 'Return Stock',
      icon: 'icofont-home bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnStockRoutingModule { }
