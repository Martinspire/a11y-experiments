import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { TeamsComponent } from './teams.component';

describe('TeamsComponent', () => {
  let spectator: Spectator<TeamsComponent>;
  const createComponent = createComponentFactory(TeamsComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
