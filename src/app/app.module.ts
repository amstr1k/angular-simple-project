import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientService } from './services/client.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DatePipe } from './pipes/date.pipe';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CurrencyPipe } from './pipes/currency.pipe';
import { ClientComponent } from './components/сlients-table/client.component';
import { ClientPageComponent } from './components/client-page/client-page.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule
  ],
  declarations: [
    AppComponent,
    ClientComponent,
    DatePipe,
    CurrencyPipe,
    ClientPageComponent
  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
