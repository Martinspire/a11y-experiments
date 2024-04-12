import { Route } from '@angular/router';
import { EmbedComponent } from './embed/embed.component';
import { ExamplesComponent } from './examples.component';
import { GraphComponent } from './graph/graph.component';
import { MarkdownComponent } from './markdown/markdown.component';

export const examplesRoutes: Route[] = [
  {
    path: '',
    component: ExamplesComponent,
  },
  {
    path: 'embed',
    component: EmbedComponent,
  },
  {
    path: 'graph',
    component: GraphComponent,
  },
  {
    path: 'markdown',
    component: MarkdownComponent,
  },
];
