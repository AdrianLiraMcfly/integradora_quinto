import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { tokenInterceptor } from './core/interceptors/token.interceptor';

import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(withInterceptors([tokenInterceptor]))]
};
