import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { MarkdownComponent } from './markdown.component';

describe('MarkdownComponent', () => {
  let spectator: Spectator<MarkdownComponent>;
  const createComponent = createComponentFactory(MarkdownComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
