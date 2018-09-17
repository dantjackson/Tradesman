import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAddTaskComponent } from './job-add-task.component';

describe('JobAddTaskComponent', () => {
  let component: JobAddTaskComponent;
  let fixture: ComponentFixture<JobAddTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAddTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
