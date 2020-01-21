import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletConfirmationComponent } from './delet-confirmation.component';

describe('DeletConfirmationComponent', () => {
  let component: DeletConfirmationComponent;
  let fixture: ComponentFixture<DeletConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
