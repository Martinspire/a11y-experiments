import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { SideBySideExampleComponent } from './side-by-side-example.component';

describe('SideBySideExampleComponent', () => {
  let spectator: Spectator<SideBySideExampleComponent>;
  const createComponent = createComponentFactory(SideBySideExampleComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
