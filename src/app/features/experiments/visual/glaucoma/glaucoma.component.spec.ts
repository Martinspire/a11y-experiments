import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { GlaucomaComponent } from './glaucoma.component';

describe('GlaucomaComponent', () => {
  let spectator: Spectator<GlaucomaComponent>;
  const createComponent = createComponentFactory(GlaucomaComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
