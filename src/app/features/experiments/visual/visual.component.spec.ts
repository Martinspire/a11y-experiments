import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { VisualComponent } from './visual.component';

describe('VisualComponent', () => {
  let spectator: Spectator<VisualComponent>;
  const createComponent = createComponentFactory(VisualComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
