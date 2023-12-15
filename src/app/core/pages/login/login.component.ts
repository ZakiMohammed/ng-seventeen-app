import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  username = '';
  password = '';

  login() {
    this.authService.login(this.username, this.password).subscribe(user => {
      if (user) {
        this.router.navigate(['/']);
      } else {
        alert('Login failed');
      }
    });
  }
}
