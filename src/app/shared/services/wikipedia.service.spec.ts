import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { WikipediaService } from './wikipedia.service';

describe('WikipediaService', () => {
  let spectator: SpectatorService<WikipediaService>;
  const createService = createServiceFactory(WikipediaService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});