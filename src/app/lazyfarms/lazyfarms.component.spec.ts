import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyfarmsComponent } from './lazyfarms.component';

describe('LazyfarmsComponent', () => {
  let component: LazyfarmsComponent;
  let fixture: ComponentFixture<LazyfarmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyfarmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyfarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
