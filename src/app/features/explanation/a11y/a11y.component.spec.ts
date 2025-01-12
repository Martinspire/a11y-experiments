import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { A11yComponent } from './a11y.component';

describe('A11yComponent', () => {
  let spectator: Spectator<A11yComponent>;
  const createComponent = createComponentFactory(A11yComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
