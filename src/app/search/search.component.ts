import { Component, OnInit } from '@angular/core';
import { BooksService} from "../services/books-service";
import { Book } from "../domain/book.model";
import { Formats } from "../domain/formats.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SearchService} from "../services/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit {

  formats: Formats[];
  books: Book[];

  searchForm: FormGroup;
  author: FormControl;

  searches: string[] = [];

  constructor (private bookService: BooksService,
               private search: SearchService) {
    this.books = new Array();
    this.author = new FormControl('', Validators.required);
    this.searchForm = new FormGroup({
      'author': this.author
    })
  }

  ngOnInit() {
    this.bookService.getFormats().subscribe(formats => {
      this.formats = formats;
    })

    this.author.valueChanges
      .subscribe(term => {
        this.search.findByAuthor(this.author.value).subscribe(books => {
          this.books = [];
          this.books = books;
          console.log(this.books);
        });
      })
  }

  findBook() {

  }

}
