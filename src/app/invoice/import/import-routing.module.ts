import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InvoiceImportComponent} from './import.component';

const routes: Routes = [
  {
    path: '',
    component: InvoiceImportComponent,
    data: {
      breadcrumb: 'File Upload',
      icon: 'icofont-upload-alt bg-c-lite-green',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - File Upload',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceImportRoutingModule { }
