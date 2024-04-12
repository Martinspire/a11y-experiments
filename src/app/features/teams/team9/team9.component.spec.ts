import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { Team9Component } from './team9.component';

describe('Team9Component', () => {
  let spectator: Spectator<Team9Component>;
  const createComponent = createComponentFactory(Team9Component);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
