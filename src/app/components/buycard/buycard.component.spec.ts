import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycardComponent } from './buycard.component';

describe('BuycardComponent', () => {
  let component: BuycardComponent;
  let fixture: ComponentFixture<BuycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
