import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { TabsExampleComponent } from './tabs-example.component';

describe('TabsExampleComponent', () => {
  let spectator: Spectator<TabsExampleComponent>;
  const createComponent = createComponentFactory(TabsExampleComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
