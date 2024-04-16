import { Route } from '@angular/router';
import { A11yComponent } from './a11y/a11y.component';
import { AriaComponent } from './aria/aria.component';
import { ExplanationComponent } from './explanation.component';
import { PostersComponent } from './posters/posters.component';
import { WcagComponent } from './wcag/wcag.component';

export const explanationRoutes: Route[] = [
  {
    path: '',
    component: ExplanationComponent,
    children: [
      {
        path: '',
        component: A11yComponent,
        data: {
          title: 'A11y',
          breadcrumb: 'A11y',
        },
      },
      {
        path: 'aria',
        component: AriaComponent,
        data: {
          title: 'Aria',
          breadcrumb: 'Aria',
        },
      },
      {
        path: 'wcag',
        component: WcagComponent,
        data: {
          title: 'WCAG',
          breadcrumb: 'WCAG',
        },
      },
      {
        path: 'posters',
        component: PostersComponent,
        data: {
          title: 'Posters',
          breadcrumb: 'Posters',
        },
      },
    ],
  },
];
