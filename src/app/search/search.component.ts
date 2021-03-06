import { Component, OnInit, ViewChild } from '@angular/core';
import { BooksService} from "../services/books-service";
import { Book } from "../domain/book.model";
import {FormControl, FormGroup, Validators } from "@angular/forms";
import {SearchService} from "../services/search.service";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit {

  @ViewChild('pages') pagesAmount: FormGroup;
  results: Observable<Book[]>;

  searchForm: FormGroup;
  multiType: FormControl;

  constructor (private bookService: BooksService,
               private search: SearchService) {


    this.multiType = new FormControl('', Validators.required);

    this.searchForm = new FormGroup({
        'multiType': this.multiType
    })
  }

  ngOnInit() {
    this.results = this.multiType.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(value => this.search.byNameTitleIsbn(value));

  }
}
