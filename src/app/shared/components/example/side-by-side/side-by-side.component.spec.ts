import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { SideBySideComponent } from './side-by-side.component';

describe('SideBySideComponent', () => {
  let spectator: Spectator<SideBySideComponent>;
  const createComponent = createComponentFactory(SideBySideComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
