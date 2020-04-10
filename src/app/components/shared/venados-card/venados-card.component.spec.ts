import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenadosCardComponent } from './venados-card.component';

describe('VenadosCardComponent', () => {
  let component: VenadosCardComponent;
  let fixture: ComponentFixture<VenadosCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenadosCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenadosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
