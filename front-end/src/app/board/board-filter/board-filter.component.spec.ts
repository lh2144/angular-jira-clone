import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardFilterComponent } from './board-filter.component';

describe('BoardFilterComponent', () => {
  let component: BoardFilterComponent;
  let fixture: ComponentFixture<BoardFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
