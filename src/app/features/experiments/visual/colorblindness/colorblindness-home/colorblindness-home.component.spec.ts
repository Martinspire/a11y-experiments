import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ColorblindnessHomeComponent } from './colorblindness-home.component';

describe('ColorblindnessHomeComponent', () => {
  let spectator: Spectator<ColorblindnessHomeComponent>;
  const createComponent = createComponentFactory(ColorblindnessHomeComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
