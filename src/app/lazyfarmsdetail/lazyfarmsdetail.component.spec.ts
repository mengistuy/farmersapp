import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyfarmsdetailComponent } from './lazyfarmsdetail.component';

describe('LazyfarmsdetailComponent', () => {
  let component: LazyfarmsdetailComponent;
  let fixture: ComponentFixture<LazyfarmsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyfarmsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyfarmsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
