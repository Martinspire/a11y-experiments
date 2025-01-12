import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { HearingLossComponent } from './hearing-loss.component';

describe('HearingLossComponent', () => {
  let spectator: Spectator<HearingLossComponent>;
  const createComponent = createComponentFactory(HearingLossComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
