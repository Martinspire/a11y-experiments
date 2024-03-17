import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { MindComponent } from './mind.component';

describe('MindComponent', () => {
  let spectator: Spectator<MindComponent>;
  const createComponent = createComponentFactory(MindComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
