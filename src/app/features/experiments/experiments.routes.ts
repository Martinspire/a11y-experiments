import { Route } from '@angular/router';
import { ExperimentsComponent } from './experiments.component';

export const experimentsRoutes: Route[] = [
  {
    path: '',
    component: ExperimentsComponent,
  },
  {
    path: 'visual',
    data: {
      title: 'Visual Experiments',
      breadcrumb: 'Visual',
    },
    loadChildren: () => import('./visual/visual.routes').then(m => m.visualRoutes),
  },
  {
    path: 'motion',
    data: {
      title: 'Motion Experiments',
      breadcrumb: 'Motion',
    },
    loadChildren: () => import('./motion/motion.routes').then(m => m.motionRoutes),
  },
  {
    path: 'mind',
    data: {
      title: 'Mind Experiments',
      breadcrumb: 'Mind',
    },
    loadChildren: () => import('./mind/mind.routes').then(m => m.mindRoutes),
  },
  {
    path: 'audio',
    data: {
      title: 'Audio Experiments',
      breadcrumb: 'Audio',
    },
    loadChildren: () => import('./audio/audio.routes').then(m => m.audioRoutes),
  },
];
