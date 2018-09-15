import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicksaleComponent } from './quicksale.component';

describe('QuicksaleComponent', () => {
  let component: QuicksaleComponent;
  let fixture: ComponentFixture<QuicksaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuicksaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicksaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
