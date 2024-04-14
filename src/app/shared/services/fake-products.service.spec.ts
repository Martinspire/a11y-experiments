import {
  createServiceFactory, SpectatorService,
} from '@ngneat/spectator';
import { FakeProductsService } from './fake-products.service';

describe('FakeProductsService', () => {
  let spectator: SpectatorService<FakeProductsService>;
  const createService = createServiceFactory(FakeProductsService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
