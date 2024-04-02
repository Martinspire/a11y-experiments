import { Route } from '@angular/router';
import { MotionComponent } from './motion.component';
import { ShakingComponent } from './shaking/shaking.component';

export const motionRoutes: Route[] = [
  {
    path: '',
    component: MotionComponent,
  },
  {
    path: 'shaking',
    component: ShakingComponent,
    data: {
      title: 'Shaking',
      breadcrumb: 'Shaking',
    },
  },
];
