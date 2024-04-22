import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensoresDatosComponent } from './sensores-datos.component';

describe('SensoresDatosComponent', () => {
  let component: SensoresDatosComponent;
  let fixture: ComponentFixture<SensoresDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensoresDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SensoresDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
