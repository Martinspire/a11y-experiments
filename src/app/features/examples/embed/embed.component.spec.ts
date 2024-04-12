import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { EmbedComponent } from './embed.component';

describe('EmbedComponent', () => {
  let spectator: Spectator<EmbedComponent>;
  const createComponent = createComponentFactory(EmbedComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
