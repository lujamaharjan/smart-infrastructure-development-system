import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeshowComponent } from './homeshow.component';

describe('HomeshowComponent', () => {
  let component: HomeshowComponent;
  let fixture: ComponentFixture<HomeshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
