import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { MyCoreModule } from 'src/lib/my-core/modules/my-core.module';
import { ERROR_LEVEL, LoggerService } from 'src/lib/my-core/services/logger.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponentModule } from './common-component';
import { CommonServicesModule } from './common-services';
import { ConfigModule } from './config';
import {MainModule} from './main';
import { SecurityModule } from './security';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MainModule,
    SecurityModule,
    ConfigModule,
    CommonComponentModule,
    MyCoreModule,
    AppRoutingModule,
    CommonServicesModule,
  ],
  providers: [
    LoggerService,
    {provide: ERROR_LEVEL,  useValue: environment.ERROR_LEVEL},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
