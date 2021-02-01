import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeableSectionComponent } from './swipeable-section.component';

describe('SwipeableSectionComponent', () => {
  let component: SwipeableSectionComponent;
  let fixture: ComponentFixture<SwipeableSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipeableSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipeableSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
