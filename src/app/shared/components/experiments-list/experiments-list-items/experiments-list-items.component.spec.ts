import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ExperimentsListItemsComponent } from './experiments-list-items.component';

describe('ExperimentsListItemsComponent', () => {
  let spectator: Spectator<ExperimentsListItemsComponent>;
  const createComponent = createComponentFactory(ExperimentsListItemsComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
