import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookpriceComponent } from './bookprice/bookprice.component';
import {BooksService} from './books.service';
@NgModule({
  declarations: [
    AppComponent,
    BookdetailsComponent,
    BooklistComponent,
    BookpriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
