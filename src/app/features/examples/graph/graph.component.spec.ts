import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { GraphComponent } from './graph.component';

describe('GraphComponent', () => {
  let spectator: Spectator<GraphComponent>;
  const createComponent = createComponentFactory(GraphComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
