import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  public books=[];
  constructor(private bookservice:BooksService) { }

  ngOnInit() {
    this.books=this.bookservice.getBookDetails();
  }

}
