import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { EmbedYoutubeComponent } from './embed-youtube.component';

describe('EmbedYoutubeComponent', () => {
  let spectator: Spectator<EmbedYoutubeComponent>;
  const createComponent = createComponentFactory(EmbedYoutubeComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
