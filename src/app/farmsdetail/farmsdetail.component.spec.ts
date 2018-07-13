import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmsdetailComponent } from './farmsdetail.component';

describe('FarmsdetailComponent', () => {
  let component: FarmsdetailComponent;
  let fixture: ComponentFixture<FarmsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
