import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

// ng g s services/test/test.service
// ng g c components/test
// ng g m modules/test/test.module
// ng g d directives/test/test.directive
// ng g p pipes/test/test.pipe
// ng g i interfaces/test/test.interface
// ng g cl classes/test/test.class
// ng g enum enums/test/test.enum
// ng g guard guards/test/test.guard
