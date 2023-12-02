import { Routes } from '@angular/router';
import { USER_ROUTES } from './users/user.routes';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./core/pages/home/home.component').then(x => x.HomeComponent) },
    { path: 'about', loadComponent: () => import('./core/pages/about/about.component').then(x => x.AboutComponent) },
    {
        path: 'users',
        loadChildren: () => USER_ROUTES
    },
    { path: '**', loadComponent: () => import('./core/pages/notfound/notfound.component').then(x => x.NotfoundComponent) }
];
