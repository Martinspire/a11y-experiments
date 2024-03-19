import {
  Spectator, createComponentFactory, 
} from '@ngneat/spectator';

import { ExperimentsHomeComponent } from './experiments-home.component';

describe('ExperimentsHomeComponent', () => {
  let spectator: Spectator<ExperimentsHomeComponent>;
  const createComponent = createComponentFactory(ExperimentsHomeComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
