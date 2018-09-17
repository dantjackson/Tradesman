import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAddOrderComponent } from './job-add-order.component';

describe('JobAddOrderComponent', () => {
  let component: JobAddOrderComponent;
  let fixture: ComponentFixture<JobAddOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAddOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAddOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
