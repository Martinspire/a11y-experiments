import {
  Spectator, createComponentFactory, 
} from '@ngneat/spectator';

import { ExperimentsListComponent } from './experiments-list.component';

describe('ExperimentsListComponent', () => {
  let spectator: Spectator<ExperimentsListComponent>;
  const createComponent = createComponentFactory(ExperimentsListComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
