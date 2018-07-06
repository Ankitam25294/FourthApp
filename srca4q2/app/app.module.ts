import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentrollnoComponent } from './studentrollno/studentrollno.component';
import { StudentsubjectComponent } from './studentsubject/studentsubject.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentrollnoComponent,
    StudentsubjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
