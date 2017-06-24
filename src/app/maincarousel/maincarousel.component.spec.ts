import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincarouselComponent } from './maincarousel.component';

describe('MaincarouselComponent', () => {
  let component: MaincarouselComponent;
  let fixture: ComponentFixture<MaincarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaincarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
