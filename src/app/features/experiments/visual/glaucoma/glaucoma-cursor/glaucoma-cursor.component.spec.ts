import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { GlaucomaCursorComponent } from './glaucoma-cursor.component';

describe('GlaucomaCursorComponent', () => {
  let spectator: Spectator<GlaucomaCursorComponent>;
  const createComponent = createComponentFactory(GlaucomaCursorComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
