import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailGroupComponent } from './user-detail-group.component';

describe('UserDetailGroupComponent', () => {
  let component: UserDetailGroupComponent;
  let fixture: ComponentFixture<UserDetailGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
