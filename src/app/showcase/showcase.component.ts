import {Component, OnInit} from '@angular/core';
import {BooksService} from "../services/books-service";
import {Book} from "../domain/book.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html'
})
export class ShowcaseComponent implements OnInit {
  books: Book[];

  constructor(private booksService: BooksService,
              http: HttpClient) {
  }
  ngOnInit() {
    this.booksService.getBooks().subscribe((books) => {
      this.books = books;
    });

  }



}
