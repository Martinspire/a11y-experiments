import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { Team5Component } from './team5.component';

describe('Team5Component', () => {
  let spectator: Spectator<Team5Component>;
  const createComponent = createComponentFactory(Team5Component);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
