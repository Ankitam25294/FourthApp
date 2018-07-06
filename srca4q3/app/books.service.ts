import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }
  getBookDetails()
  {
    return[
      {name:"c",price:340,author:"ajaymittal",noofpages:500},
      {name:"operating system",price:400,author:"achyut godbole",noofpages:600},
      {name:"java",price:540,author:"nageswara rao",noofpages:700}
    ]
  }
}
