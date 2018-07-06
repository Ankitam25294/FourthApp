import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  public books=[];
  constructor(private bookservice:BooksService) { }

  ngOnInit() {
    this.books=this.bookservice.getBookDetails();
  }

}
