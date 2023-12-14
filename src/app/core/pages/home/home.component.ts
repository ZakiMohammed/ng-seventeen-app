import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandIconComponent } from '../../components/brand-icon/brand-icon.component';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BrandIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(loaderService: LoaderService) {
    loaderService.show();
    setTimeout(() => loaderService.hide(), 2000);
  }
}
