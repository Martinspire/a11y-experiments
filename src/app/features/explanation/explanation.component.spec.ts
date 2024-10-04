import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { ExplanationComponent } from './explanation.component';

describe('ExplanationComponent', () => {
  let spectator: Spectator<ExplanationComponent>;
  const createComponent = createComponentFactory(ExplanationComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
