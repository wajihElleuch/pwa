import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVesselsComponent } from './list-vessels.component';

describe('ListVesselsComponent', () => {
  let component: ListVesselsComponent;
  let fixture: ComponentFixture<ListVesselsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVesselsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVesselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
