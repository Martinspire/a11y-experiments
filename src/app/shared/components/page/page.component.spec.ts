import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PageComponent } from './page.component';

describe('PageComponent', () => {
  let spectator: Spectator<PageComponent>;
  const createComponent = createComponentFactory(PageComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
