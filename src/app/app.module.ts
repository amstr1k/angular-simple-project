import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
