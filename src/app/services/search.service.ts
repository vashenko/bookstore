import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Cities} from "../domain/cities.model";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {RequestOptions} from "@angular/http";
import {BooksService} from "./books-service";
import {Book} from "../domain/book.model";
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  url: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient,
              private bookService: BooksService) {
    this.url = 'http://localhost:3004';
    this.headers = new HttpHeaders().set('x-auth-token', 'bad18eba1ff45jk7858b8ae88a77fa30');
  }

  findByAuthor(value): Observable<Book[]> {
    return this.bookService.getBooks().map((books) => {
      return books.filter(book => book.author.includes(value));
    });
    // return array.filter( book => book.author.includes(value));
  }

}
