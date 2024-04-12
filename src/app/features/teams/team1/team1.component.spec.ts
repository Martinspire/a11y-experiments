import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { Team1Component } from './team1.component';

describe('Team1Component', () => {
  let spectator: Spectator<Team1Component>;
  const createComponent = createComponentFactory(Team1Component);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
