import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-brand-icon',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './brand-icon.component.html',
  styleUrl: './brand-icon.component.scss'
})
export class BrandIconComponent {

}
