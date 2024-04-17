import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ContrastComponent } from './contrast.component';

describe('ContrastComponent', () => {
  let spectator: Spectator<ContrastComponent>;
  const createComponent = createComponentFactory(ContrastComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
