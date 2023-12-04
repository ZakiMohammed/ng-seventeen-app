export const USER_ROUTES = [
  { path: '', loadComponent: () => import('./pages/user-list/user-list.component').then(x => x.UserListComponent) },
  {
    path: ':id',
    loadComponent: () => import('./pages/user-detail/user-detail.component').then(x => x.UserDetailComponent),
  },
];
