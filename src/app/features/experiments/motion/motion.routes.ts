import { Route } from '@angular/router';
import { MotionComponent } from './motion.component';
import { ShakingComponent } from './shaking/shaking.component';
import { WalkingComponent } from './walking/walking.component';

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
  {
    path: 'walking',
    component: WalkingComponent,
    data: {
      title: 'Walking',
      breadcrumb: 'Walking',
    },
  },
];
