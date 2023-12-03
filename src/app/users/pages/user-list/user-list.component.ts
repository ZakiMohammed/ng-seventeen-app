import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { LoaderComponent } from '../../../core/components/loader/loader.component';
import { PageTitleComponent } from '../../../core/components/page-title/page-title.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, LoaderComponent, PageTitleComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(
    private router: Router,
    private userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getAll();
  }

  goToDetails(id: number) {
    this.router.navigate(['users', id]);
  }
}
