import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { BigExampleComponent } from './big-example.component';

describe('BigExampleComponent', () => {
  let spectator: Spectator<BigExampleComponent>;
  const createComponent = createComponentFactory(BigExampleComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
