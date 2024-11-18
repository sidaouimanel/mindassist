import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetFriendsComponent } from './meet-friends.component';

describe('MeetFriendsComponent', () => {
  let component: MeetFriendsComponent;
  let fixture: ComponentFixture<MeetFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetFriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
