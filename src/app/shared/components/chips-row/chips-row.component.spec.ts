import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { ChipsRowComponent } from './chips-row.component';

describe('ChipsRowComponent', () => {
  let spectator: Spectator<ChipsRowComponent>;
  const createComponent = createComponentFactory(ChipsRowComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
