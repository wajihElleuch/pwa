import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselsDetailsComponent } from './vessels-details.component';

describe('VesselsDetailsComponent', () => {
  let component: VesselsDetailsComponent;
  let fixture: ComponentFixture<VesselsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VesselsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
