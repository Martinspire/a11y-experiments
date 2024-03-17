import {
  Spectator, createComponentFactory,
} from '@ngneat/spectator';

import { StepperExampleComponent } from './stepper-example.component';

describe('StepperExampleComponent', () => {
  let spectator: Spectator<StepperExampleComponent>;
  const createComponent = createComponentFactory(StepperExampleComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
