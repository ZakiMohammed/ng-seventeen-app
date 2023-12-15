import { Routes } from '@angular/router';
import { USER_ROUTES } from './features/users/user.routes';
import { ShellComponent } from './core/components/shell/shell.component';
import { authGuard } from './core/guards/auth.guard';
import { loginGuard } from './core/guards/login.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./core/pages/login/login.component').then(x => x.LoginComponent),
    canActivate: [loginGuard],
  },
  {
    path: '',
    component: ShellComponent,
    canActivate: [authGuard],
    children: [
      { path: '', loadComponent: () => import('./core/pages/home/home.component').then(x => x.HomeComponent) },
      { path: 'about', loadComponent: () => import('./core/pages/about/about.component').then(x => x.AboutComponent) },
      { path: 'users', loadChildren: () => USER_ROUTES },
      {
        path: '**',
        loadComponent: () => import('./core/pages/notfound/notfound.component').then(x => x.NotfoundComponent),
      },
    ],
  },
];
