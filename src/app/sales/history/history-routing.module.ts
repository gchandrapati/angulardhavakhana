import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HistoryComponent} from './history.component';

const routes: Routes = [
  {
    path: '',
    component: HistoryComponent,
    data: {
      breadcrumb: 'History',
      icon: 'icofont-home bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
