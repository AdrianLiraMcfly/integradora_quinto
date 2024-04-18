import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavtwoComponent } from './navtwo.component';

describe('NavtwoComponent', () => {
  let component: NavtwoComponent;
  let fixture: ComponentFixture<NavtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavtwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
