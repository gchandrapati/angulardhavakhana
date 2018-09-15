import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceImportComponent } from './import.component';

describe('ImportComponent', () => {
  let component: InvoiceImportComponent;
  let fixture: ComponentFixture<InvoiceImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
