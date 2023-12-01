import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandIconComponent } from '../brand-icon/brand-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, BrandIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
