import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAddPartComponent } from './job-add-part.component';

describe('JobAddPartComponent', () => {
  let component: JobAddPartComponent;
  let fixture: ComponentFixture<JobAddPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAddPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAddPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
