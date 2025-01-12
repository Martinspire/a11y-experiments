import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { AriaComponent } from './aria.component';

describe('AriaComponent', () => {
  let spectator: Spectator<AriaComponent>;
  const createComponent = createComponentFactory(AriaComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
