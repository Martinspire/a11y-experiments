import {
  Spectator, createComponentFactory, 
} from '@ngneat/spectator';

import { ExperimentsComponent } from './experiments.component';

describe('ExperimentsComponent', () => {
  let spectator: Spectator<ExperimentsComponent>;
  const createComponent = createComponentFactory(ExperimentsComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
