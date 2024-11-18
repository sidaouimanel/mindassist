import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelaxationActivityComponent } from './relaxation-activity.component';

describe('RelaxationActivityComponent', () => {
  let component: RelaxationActivityComponent;
  let fixture: ComponentFixture<RelaxationActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelaxationActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelaxationActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
