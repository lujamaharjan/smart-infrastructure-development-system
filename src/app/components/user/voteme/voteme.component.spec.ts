import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotemeComponent } from './voteme.component';

describe('VotemeComponent', () => {
  let component: VotemeComponent;
  let fixture: ComponentFixture<VotemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
