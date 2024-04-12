import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { Team7Component } from './team7.component';

describe('Team7Component', () => {
  let spectator: Spectator<Team7Component>;
  const createComponent = createComponentFactory(Team7Component);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
