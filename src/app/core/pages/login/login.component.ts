import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoaderService } from '../../services/loader.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrService } from 'ngx-toastr';
import { MESSAGE_CONSTANTS } from '../../constants/message.constant';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authService = inject(AuthService);
  loaderService = inject(LoaderService);
  router = inject(Router);
  toastrService = inject(ToastrService);

  username = '';
  password = '';

  login() {
    if (!this.username || !this.password) {
      this.toastrService.error(MESSAGE_CONSTANTS.REQUIRED_CREDENTIALS);
      return;
    }

    this.loaderService.show();
    this.authService.login(this.username, this.password).subscribe(user => {
      if (user) {
        this.router.navigate(['/']);
      } else {
        this.toastrService.error(MESSAGE_CONSTANTS.INVALID_CREDENTIALS);
      }
      this.loaderService.hide();
    });
  }
}
