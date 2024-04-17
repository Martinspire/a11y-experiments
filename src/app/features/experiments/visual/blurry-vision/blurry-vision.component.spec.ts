import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { BlurryVisionComponent } from './blurry-vision.component';

describe('BlurryVisionComponent', () => {
  let spectator: Spectator<BlurryVisionComponent>;
  const createComponent = createComponentFactory(BlurryVisionComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
