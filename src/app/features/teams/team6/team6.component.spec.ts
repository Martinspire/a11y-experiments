import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { Team6Component } from './team6.component';

describe('Team6Component', () => {
  let spectator: Spectator<Team6Component>;
  const createComponent = createComponentFactory(Team6Component);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
