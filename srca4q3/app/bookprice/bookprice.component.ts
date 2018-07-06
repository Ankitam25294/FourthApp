import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';
@Component({
  selector: 'app-bookprice',
  templateUrl: './bookprice.component.html',
  styleUrls: ['./bookprice.component.css']
})
export class BookpriceComponent implements OnInit {

  public books=[];
  constructor(private bookservice:BooksService) { }

  ngOnInit() {
    this.books=this.bookservice.getBookDetails();
  }

}
