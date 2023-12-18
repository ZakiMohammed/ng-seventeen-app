import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailItemComponent } from './user-detail-item.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

describe('UserDetailItemComponent', () => {
  let component: UserDetailItemComponent;
  let fixture: ComponentFixture<UserDetailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailItemComponent, FontAwesomeTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
