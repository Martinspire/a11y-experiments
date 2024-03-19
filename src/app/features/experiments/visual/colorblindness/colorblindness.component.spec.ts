import {
  Spectator, createComponentFactory, 
} from '@ngneat/spectator';

import { ColorblindnessComponent } from './colorblindness.component';

describe('ColorblindnessComponent', () => {
  let spectator: Spectator<ColorblindnessComponent>;
  const createComponent = createComponentFactory(ColorblindnessComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
