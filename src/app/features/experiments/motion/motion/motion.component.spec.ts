import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { MotionComponent } from './motion.component';

describe('MotionComponent', () => {
  let spectator: Spectator<MotionComponent>;
  const createComponent = createComponentFactory(MotionComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
