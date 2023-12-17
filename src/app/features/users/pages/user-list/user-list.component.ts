import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Observable, catchError, of } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { PageTitleComponent } from '../../../../core/components/page-title/page-title.component';
import { PageLoaderComponent } from '../../../../core/components/page-loader/page-loader.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgOptimizedImage, PageLoaderComponent, PageTitleComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.users$ = this.userService.getAll().pipe(catchError(() => of([])));
  }

  goToDetails(id: number) {
    this.router.navigate(['users', id]);
  }
}
