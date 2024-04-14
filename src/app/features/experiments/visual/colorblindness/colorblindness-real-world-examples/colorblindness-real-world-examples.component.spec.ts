import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { ColorblindnessRealWorldExamplesComponent } from './colorblindness-real-world-examples.component';

describe('ColorblindnessRealWorldExamplesComponent', () => {
  let spectator: Spectator<ColorblindnessRealWorldExamplesComponent>;
  const createComponent = createComponentFactory(ColorblindnessRealWorldExamplesComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
