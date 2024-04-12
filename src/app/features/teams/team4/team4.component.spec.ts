import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { Team4Component } from './team4.component';

describe('Team4Component', () => {
  let spectator: Spectator<Team4Component>;
  const createComponent = createComponentFactory(Team4Component);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
