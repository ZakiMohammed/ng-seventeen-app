import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./core/pages/home/home.component').then(x => x.HomeComponent) },
    { path: 'about', loadComponent: () => import('./core/pages/about/about.component').then(x => x.AboutComponent) },
    { path: '**', loadComponent: () => import('./core/pages/notfound/notfound.component').then(x => x.NotfoundComponent) }
];
