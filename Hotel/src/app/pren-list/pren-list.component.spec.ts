import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenListComponent } from './pren-list.component';

describe('PrenListComponent', () => {
  let component: PrenListComponent;
  let fixture: ComponentFixture<PrenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
