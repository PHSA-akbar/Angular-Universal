import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';

import { MultiColumnLayoutComponent } from './multi-column-layout/multi-column-layout.component';
import { ExpandableCardComponent } from './expandable-card/expandable-card.component';
import { SwipeableSectionComponent } from './swipeable-section/swipeable-section.component';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';

/*
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  };
} */

@NgModule({
  declarations: [
    AppComponent,
    MultiColumnLayoutComponent,
    ExpandableCardComponent,
    SwipeableSectionComponent,
    ResponsiveTableComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,

    AppRoutingModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatTabsModule
  ],
  providers: [
    /*{
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
