import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    MatSidenavModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
