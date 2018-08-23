import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Book} from "../domain/book.model";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Formats} from "../domain/formats.model";
import {DataConvertService} from "./convert-data.service";
import {Country} from "../domain/coutry.model";
import {Cities} from "../domain/cities.model";
import {Companies} from "../domain/companies.model";

@Injectable()
export class BooksService {
  books: Book[] = [];
  formats: Formats[] = [];
  countries: Country[] = [];
  cities: Cities[] = [];
  companies: Companies[] = [];
  url: string = 'http://localhost:3004';

  constructor(private http: HttpClient,
              private convert: DataConvertService) {
  }


  getBooks(): Observable<Book[]> {
    return this.http.get(`${this.url}/books`).map(res => {
      return this.convert.intoBooks(res, this.books);
    })
  }

  getFormats(): Observable<Formats[]> {
    return this.http.get(`${this.url}/formats`).map(res => {
      return this.convert.intoFormats(res, this.formats);
    })
  }

  getCountries(): Observable<Country[]> {
    return this.http.get(`${this.url}/countries`).map(res => {
      return this.convert.intoCountries(res, this.countries);
    })
  }

  getCities(): Observable<Cities[]> {
    return this.http.get(`${this.url}/cities`).map(res => {
      return this.convert.intoCities(res, this.cities);
    })
  }

  getCompanies(): Observable<Companies[]> {
    return this.http.get(`${this.url}/companies`).map(res => {
      return this.convert.intoCompanies(res, this.companies);
    })
  }

  createBook(bookData) {
    this.http.post(`${this.url}/books`, bookData)
      .subscribe(res => {
      })
  }

}
