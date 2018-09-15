import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReturnItemsComponent} from './return-items.component';

const routes: Routes = [
  {
    path: '',
    component: ReturnItemsComponent,
    data: {
      breadcrumb: 'Return Items',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnItemsRoutingModule { }
