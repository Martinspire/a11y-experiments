import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { EmbedPdfComponent } from './embed-pdf.component';

describe('EmbedPdfComponent', () => {
  let spectator: Spectator<EmbedPdfComponent>;
  const createComponent = createComponentFactory(EmbedPdfComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
