import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { AppComponent } from './app/app.component';
import { Wordlee } from './components/wordlee/wordlee.component';

//bootstrapApplication(AppComponent, appConfig)
bootstrapApplication(Wordlee, appConfig)
  .catch((err) => console.error(err));
