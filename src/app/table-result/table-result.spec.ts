import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableResult } from './table-result';

describe('TableResult', () => {
  let component: TableResult;
  let fixture: ComponentFixture<TableResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableResult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
