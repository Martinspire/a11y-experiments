import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ConsistancyComponent } from './consistancy.component';

describe('ConsistancyComponent', () => {
  let spectator: Spectator<ConsistancyComponent>;
  const createComponent = createComponentFactory(ConsistancyComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
