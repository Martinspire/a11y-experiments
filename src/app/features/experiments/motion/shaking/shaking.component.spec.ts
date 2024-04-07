import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { ShakingComponent } from './shaking.component';

describe('ShakingComponent', () => {
  let spectator: Spectator<ShakingComponent>;
  const createComponent = createComponentFactory(ShakingComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
