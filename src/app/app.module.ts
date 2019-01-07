import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EventDetailsDialogComponent} from './event-details-dialog/event-details.component';
import {MapComponent} from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    EventDetailsDialogComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [EventDetailsDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
