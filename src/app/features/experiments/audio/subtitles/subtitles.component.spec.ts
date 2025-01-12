import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { SubtitlesComponent } from './subtitles.component';

describe('SubtitlesComponent', () => {
  let spectator: Spectator<SubtitlesComponent>;
  const createComponent = createComponentFactory(SubtitlesComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
