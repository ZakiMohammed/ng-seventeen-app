import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserDetailItemComponent } from '../user-detail-item/user-detail-item.component';

@Component({
  selector: 'app-user-detail-group',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, UserDetailItemComponent],
  templateUrl: './user-detail-group.component.html',
  styleUrl: './user-detail-group.component.scss',
})
export class UserDetailGroupComponent {
  @Input() user!: User;
}
