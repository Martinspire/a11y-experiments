import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { TooSmallComponent } from './too-small.component';

describe('TooSmallComponent', () => {
  let spectator: Spectator<TooSmallComponent>;
  const createComponent = createComponentFactory(TooSmallComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
