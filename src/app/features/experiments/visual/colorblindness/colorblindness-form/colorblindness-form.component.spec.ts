import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { ColorblindnessFormComponent } from './colorblindness-form.component';

describe('ColorblindnessFormComponent', () => {
  let spectator: Spectator<ColorblindnessFormComponent>;
  const createComponent = createComponentFactory(ColorblindnessFormComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
