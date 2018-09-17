
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavexampleComponent } from './navexample.component';

describe('NavexampleComponent', () => {
  let component: NavexampleComponent;
  let fixture: ComponentFixture<NavexampleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [NavexampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
