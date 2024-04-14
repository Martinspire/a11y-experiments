import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { MarkdownExampleComponent } from './markdown.component';

describe('MarkdownExampleComponent', () => {
  let spectator: Spectator<MarkdownExampleComponent>;
  const createComponent = createComponentFactory(MarkdownExampleComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
