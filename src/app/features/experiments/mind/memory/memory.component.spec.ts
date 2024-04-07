import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { MemoryComponent } from './memory.component';

describe('MemoryComponent', () => {
  let spectator: Spectator<MemoryComponent>;
  const createComponent = createComponentFactory(MemoryComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
