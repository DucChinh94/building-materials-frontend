import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGuideComponent } from './payment-guide.component';

describe('PaymentGuideComponent', () => {
  let component: PaymentGuideComponent;
  let fixture: ComponentFixture<PaymentGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
