import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Purchases',
      status: false
    },
    children: [
      {
        path: 'purchase',
        loadChildren: './purchase/purchase.module#PurchaseModule'
      },
      {
        path: 'import',
        loadChildren: './import/import.module#InvoiceImportModule'
      },
      {
        path: 'basic-invoice',
        loadChildren: './basic-invoice/basic-invoice.module#BasicInvoiceModule'
      }, {
        path: 'summary',
        loadChildren: './summary-invoice/summary-invoice.module#SummaryInvoiceModule'
      }, {
        path: 'list',
        loadChildren: './list-invoice/list-invoice.module#ListInvoiceModule'
      },
      {
        path: 'return-items',
        loadChildren: './return-items/return-items.module#ReturnItemsModule'
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
