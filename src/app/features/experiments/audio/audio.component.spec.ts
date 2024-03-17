import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { AudioComponent } from './audio.component';

describe('AudioComponent', () => {
  let spectator: Spectator<AudioComponent>;
  const createComponent = createComponentFactory(AudioComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
