import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { BreadcrumbsComponent } from './breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
  let spectator: Spectator<BreadcrumbsComponent>;
  const createComponent = createComponentFactory(BreadcrumbsComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
