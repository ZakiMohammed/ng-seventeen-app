import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandIconComponent } from '../../components/brand-icon/brand-icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BrandIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
