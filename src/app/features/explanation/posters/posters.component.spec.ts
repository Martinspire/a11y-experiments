import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PostersComponent } from './posters.component';

describe('PostersComponent', () => {
  let spectator: Spectator<PostersComponent>;
  const createComponent = createComponentFactory(PostersComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
