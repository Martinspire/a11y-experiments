import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { DyslexiaComponent } from './dyslexia.component';

describe('DyslexiaComponent', () => {
  let spectator: Spectator<DyslexiaComponent>;
  const createComponent = createComponentFactory(DyslexiaComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
