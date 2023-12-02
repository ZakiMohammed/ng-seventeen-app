export const USER_ROUTES = [
    { path: '', loadComponent: () => import('./pages/user-list/user-list.component').then(x => x.UserListComponent) },
];
