import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    data: { title: 'Home' },
    loadChildren: () => import('./features/home/home.routes').then(m => m.homeRoutes),
  },
  {
    path: 'experiments',
    data: {
      breadcrumb: 'Experiments',
      title: 'Experiments',
    },
    loadChildren: () => import('./features/experiments/experiments.routes').then(m => m.experimentsRoutes),
  },
  {
    path: 'not-found',
    data: {
      breadcrumb: 'Not Found',
      title: 'Not Found',
    },
    loadChildren: () => import('./features/not-found/not-found.routes').then(m => m.notFoundRoutes),
  },
  {
    path: 'changelog',
    data: {
      breadcrumb: 'Changelog',
      title: 'Changelog',
    },
    loadChildren: () => import('./features/changelog/changelog.routes').then(m => m.changelogRoutes),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
