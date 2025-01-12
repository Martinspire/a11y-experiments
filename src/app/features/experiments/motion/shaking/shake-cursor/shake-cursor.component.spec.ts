import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ShakeCursorComponent } from './shake-cursor.component';

describe('ShakeCursorComponent', () => {
  let spectator: Spectator<ShakeCursorComponent>;
  const createComponent = createComponentFactory(ShakeCursorComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
