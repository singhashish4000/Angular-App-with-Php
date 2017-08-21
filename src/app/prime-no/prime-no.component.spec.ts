import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNoComponent } from './prime-no.component';

describe('PrimeNoComponent', () => {
  let component: PrimeNoComponent;
  let fixture: ComponentFixture<PrimeNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
