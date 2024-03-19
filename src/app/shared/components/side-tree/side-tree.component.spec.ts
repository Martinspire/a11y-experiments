import {
  Spectator, createComponentFactory, 
} from '@ngneat/spectator';

import { SideTreeComponent } from './side-tree.component';

describe('SideTreeComponent', () => {
  let spectator: Spectator<SideTreeComponent>;
  const createComponent = createComponentFactory(SideTreeComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
