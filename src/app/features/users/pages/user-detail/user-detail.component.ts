import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserDetailGroupComponent } from '../../components/user-detail-group/user-detail-group.component';
import { PageTitleComponent } from '../../../../core/components/page-title/page-title.component';
import { PageLoaderComponent } from '../../../../core/components/page-loader/page-loader.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgOptimizedImage,
    PageLoaderComponent,
    PageTitleComponent,
    UserDetailGroupComponent,
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent implements OnInit {
  user$!: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user$ = this.userService.getById(this.route.snapshot.params['id']);
  }
}
