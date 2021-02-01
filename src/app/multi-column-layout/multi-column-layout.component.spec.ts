import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MultiColumnLayoutComponent } from './multi-column-layout.component';

describe('MultiColumnLayoutComponent', () => {
  let component: MultiColumnLayoutComponent;
  let fixture: ComponentFixture<MultiColumnLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiColumnLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiColumnLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
