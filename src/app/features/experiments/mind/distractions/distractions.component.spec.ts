import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { DistractionsComponent } from './distractions.component';

describe('DistractionsComponent', () => {
  let spectator: Spectator<DistractionsComponent>;
  const createComponent = createComponentFactory(DistractionsComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
