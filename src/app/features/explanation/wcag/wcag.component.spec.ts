import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { WcagComponent } from './wcag.component';

describe('WcagComponent', () => {
  let spectator: Spectator<WcagComponent>;
  const createComponent = createComponentFactory(WcagComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
