import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss',
})
export class PageTitleComponent {
  @Input() pageTitle = '';
  @Input() pageIcon: IconProp | null = null;
}
