import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { Team3Component } from './team3.component';

describe('Team3Component', () => {
  let spectator: Spectator<Team3Component>;
  const createComponent = createComponentFactory(Team3Component);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
