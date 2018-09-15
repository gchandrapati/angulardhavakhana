import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PurchaseComponent} from './purchase.component';

const routes: Routes = [
  {
    path: '',
    component: PurchaseComponent,
    data: {
      breadcrumb: 'Invoice List',
      icon: 'icofont-chart-histogram bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Invoice List',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
