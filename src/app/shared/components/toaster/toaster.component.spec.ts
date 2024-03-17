import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { ToasterComponent } from './toaster.component';

describe('ToasterComponent', () => {
  let spectator: Spectator<ToasterComponent>;
  const createComponent = createComponentFactory(ToasterComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
