import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import {
  DarkTheme, DefaultFontSize, FontSizes, LightTheme,
} from '@shared/constants/theme.constants';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private doc = inject<Document>(DOCUMENT);

  currentFontSize = DefaultFontSize;
  isFirstFontSize = false;
  isLastFontSize = false;

  constructor() {
    if (window.matchMedia) {
      this.setThemePreference(window.matchMedia('(prefers-color-scheme: dark)'));
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ($event: MediaQueryListEvent) => {
        this.setThemePreference($event);
      });
    }
  }

  setThemePreference(query: MediaQueryList | MediaQueryListEvent) {
    if (query.matches) {
      this.switchTheme(DarkTheme);
    } else {
      this.switchTheme(LightTheme);
    }
  }

  switchTheme(theme: string) {
    const body = this.doc.getElementsByTagName('html')[0];
    if (theme === DarkTheme) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    }
  }

  setFontSize(fontSize: number) {
    const body = this.doc.getElementsByTagName('body')[0];
    FontSizes.forEach((size) => {
      body.classList.remove(`size-${size}`);
    });
    body.classList.add(`size-${fontSize}`);
  }

  decreaseFontSize() {
    const currentSizeIndex = FontSizes.indexOf(this.currentFontSize);
    if (currentSizeIndex > 0) {
      this.currentFontSize = FontSizes[currentSizeIndex - 1];
      this.setFontSize(this.currentFontSize);
    }
  }

  increaseFontSize() {
    const currentSizeIndex = FontSizes.indexOf(this.currentFontSize);
    if (currentSizeIndex < FontSizes.length - 1) {
      this.currentFontSize = FontSizes[currentSizeIndex + 1];
      this.setFontSize(this.currentFontSize);
    }
  }
}
