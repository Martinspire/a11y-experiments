import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ColorblindnessImagesComponent } from './colorblindness-images.component';

describe('ColorblindnessImagesComponent', () => {
  let spectator: Spectator<ColorblindnessImagesComponent>;
  const createComponent = createComponentFactory(ColorblindnessImagesComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
