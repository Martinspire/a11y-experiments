import {
  createServiceFactory, SpectatorService,
} from '@ngneat/spectator';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let spectator: SpectatorService<ApiService>;
  const createService = createServiceFactory(ApiService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
