import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {BooksService} from "./books-service";
import {Book} from "../domain/book.model";

import { map } from 'rxjs/operators';
import {DataConvertService} from "./convert-data.service";


@Injectable()
export class SearchService {

  constructor(private http: HttpClient,
              private bookService: BooksService,
              private convert: DataConvertService) {
  }

  byNameTitleIsbn(term: string): Observable<Book[]> {
    return this.http.get(' http://localhost:3004/books').pipe(
      map((res: Response) => {
        if(term === "") return;
        let result: Book[] = [];
        for(let v in res) {
          if((res[v].author.includes(term) || res[v].title.includes(term) || res[v].isbn.includes(term))) {
            result.push(new Book(res[v].author, res[v].cityId, res[v].companyId, res[v].countryId, res[v].description, res[v].formatId,
              res[v].id, res[v].isbn, res[v].pages, res[v].price, res[v].title))
          }
        }
        return result;
      })
    )
  }

}

// return this.bookService.getBooks().map(res => {
//   this.books = this.convert.intoBooks(res, this.books)
//   return this.books.filter(book => book.author.includes(term));
