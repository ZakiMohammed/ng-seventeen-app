import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandIconComponent } from './brand-icon.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

describe('BrandIconComponent', () => {
  let component: BrandIconComponent;
  let fixture: ComponentFixture<BrandIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandIconComponent, FontAwesomeTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
