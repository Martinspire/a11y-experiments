import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { ExamplesComponent } from './examples.component';

describe('ExamplesComponent', () => {
  let spectator: Spectator<ExamplesComponent>;
  const createComponent = createComponentFactory(ExamplesComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
