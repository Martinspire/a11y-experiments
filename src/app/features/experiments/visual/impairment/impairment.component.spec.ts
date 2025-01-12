import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ImpairmentComponent } from './impairment.component';

describe('ImpairmentComponent', () => {
  let spectator: Spectator<ImpairmentComponent>;
  const createComponent = createComponentFactory(ImpairmentComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
