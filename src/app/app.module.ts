import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AcceptanceTestComponent } from './acceptance-test/acceptance-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceptanceTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
