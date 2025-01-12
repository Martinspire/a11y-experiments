import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { WalkingComponent } from './walking.component';

describe('WalkingComponent', () => {
  let spectator: Spectator<WalkingComponent>;
  const createComponent = createComponentFactory(WalkingComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
