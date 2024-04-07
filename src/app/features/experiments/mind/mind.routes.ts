import { Route } from '@angular/router';
import { ConsistancyComponent } from './consistancy/consistancy.component';
import { DistractionsComponent } from './distractions/distractions.component';
import { MemoryComponent } from './memory/memory.component';
import { MindComponent } from './mind.component';

export const mindRoutes: Route[] = [
  {
    path: '',
    component: MindComponent,
  },
  {
    path: 'consistancy',
    component: ConsistancyComponent,
    data: {
      title: 'Consistancy',
      breadcrumb: 'Consistancy',
    },
  },
  {
    path: 'distractions',
    component: DistractionsComponent,
    data: {
      title: 'Distractions',
      breadcrumb: 'Distractions',
    },
  },
  {
    path: 'memory',
    component: MemoryComponent,
    data: {
      title: 'Memory',
      breadcrumb: 'Memory',
    },
  },
];
