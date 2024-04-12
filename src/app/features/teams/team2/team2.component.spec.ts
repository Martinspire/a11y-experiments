import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { Team2Component } from './team2.component';

describe('Team2Component', () => {
  let spectator: Spectator<Team2Component>;
  const createComponent = createComponentFactory(Team2Component);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
