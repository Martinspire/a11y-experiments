import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { LegendComponent } from './legend.component';

describe('LegendComponent', () => {
  let spectator: Spectator<LegendComponent>;
  const createComponent = createComponentFactory(LegendComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
