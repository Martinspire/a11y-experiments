import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ScreenreaderComponent } from './screenreader.component';

describe('ScreenreaderComponent', () => {
  let spectator: Spectator<ScreenreaderComponent>;
  const createComponent = createComponentFactory(ScreenreaderComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
