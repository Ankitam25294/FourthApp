import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatingsystemComponent } from './operatingsystem/operatingsystem.component';
import { ProgramminglanguagesComponent } from './programminglanguages/programminglanguages.component';
import { DatabasesComponent } from './databases/databases.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatingsystemComponent,
    ProgramminglanguagesComponent,
    DatabasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
