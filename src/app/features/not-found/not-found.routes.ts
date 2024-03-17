import { Route } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

export const notFoundRoutes: Route[] = [
  {
    path: '',
    component: NotFoundComponent,
    data: {
      breadcrumb: 'Not Found',
      title: 'Not Found',
    },
  },
];
