import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsTableItemComponent } from './statistics-table-item.component';

describe('StatisticsTableItemComponent', () => {
  let component: StatisticsTableItemComponent;
  let fixture: ComponentFixture<StatisticsTableItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsTableItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
