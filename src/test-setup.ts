// @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
globalThis.ngJest = { testEnvironmentOptions: {
  errorOnUnknownElements: true,
  errorOnUnknownProperties: true,
} };
import { CommonModule } from '@angular/common';
import { ApplicationModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'jest-preset-angular/setup-jest';
import { ngMocks } from 'ng-mocks';

ngMocks.autoSpy('jest');
ngMocks.globalKeep(ApplicationModule, true);
ngMocks.globalKeep(CommonModule, true);
ngMocks.globalKeep(BrowserModule, true);
