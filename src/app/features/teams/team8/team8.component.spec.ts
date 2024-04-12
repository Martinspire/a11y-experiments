import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { Team8Component } from './team8.component';

describe('Team8Component', () => {
  let spectator: Spectator<Team8Component>;
  const createComponent = createComponentFactory(Team8Component);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
