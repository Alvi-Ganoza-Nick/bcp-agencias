import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgencyModule } from './features/agencias/agency.module';
import { DataResolver } from './features/agencias/resolvers/data.resolver';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgencyModule
  ],
  providers: [DataResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
