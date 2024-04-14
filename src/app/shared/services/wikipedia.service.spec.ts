import {
  createServiceFactory, SpectatorService,
} from '@ngneat/spectator';
import { WikiService } from './wikipedia.service';

describe('WikiService', () => {
  let spectator: SpectatorService<WikiService>;
  const createService = createServiceFactory(WikiService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
