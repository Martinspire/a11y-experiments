import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import {
  provideCharts, withDefaultRegisterables,
} from 'ng2-charts';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = { providers: [
  provideRouter(appRoutes),
  provideAnimationsAsync(),
  // decrease bundle size by specifying: provideCharts({ registerables: [BarController, Legend, Colors] });
  provideCharts(withDefaultRegisterables()),
] };
