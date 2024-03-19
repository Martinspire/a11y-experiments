import {
  Spectator, createComponentFactory, 
} from '@ngneat/spectator';

import { ChangelogComponent } from './changelog.component';

describe('ChangelogComponent', () => {
  let spectator: Spectator<ChangelogComponent>;
  const createComponent = createComponentFactory(ChangelogComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
