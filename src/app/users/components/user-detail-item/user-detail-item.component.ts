import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: '[appUserDetailItem]',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './user-detail-item.component.html',
  styleUrl: './user-detail-item.component.scss'
})
export class UserDetailItemComponent {
  @Input() text!: string;
  @Input() value!: string | number;
  @Input() icon!: IconProp;
}
