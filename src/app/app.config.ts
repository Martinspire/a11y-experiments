import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { provideMarkdown } from 'ngx-markdown';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideMarkdown(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark-theme',
        },
      },
    }),
    provideRouter(appRoutes, withComponentInputBinding()),
  ],
};
