import { Route } from '@angular/router';
import { ColorblindnessComponent } from './colorblindness/colorblindness.component';
import { VisualComponent } from './visual.component';

export const visualRoutes: Route[] = [
  {
    path: '',
    component: VisualComponent,
  },
  {
    path: 'colorblindness',
    component: ColorblindnessComponent,
    data: {
      title: 'Colorblindness',
      breadcrumb: 'Colorblindness',
    },
  },
];
