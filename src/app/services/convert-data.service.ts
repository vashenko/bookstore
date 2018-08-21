import {Injectable} from "@angular/core";
import {Book} from "../domain/book.model";
import 'rxjs/add/operator/map';
import {Formats} from "../domain/formats.model";
import {Country} from "../domain/coutry.model";
import {Cities} from "../domain/cities.model";
import {Companies} from "../domain/companies.model";

@Injectable()
export class DataConvertService {

  constructor() {
  }

  intoBooks(arr, books) {
    arr.forEach((i) => {
      books.push(new Book(i.author, i.cityId, i.companyId, i.countryId, i.description, i.formatId,
        i.id, i.isbn, i.pages, i.price, i.title));
    });
    return books;
  }

  intoFormats(arr, formats) {
    arr.forEach((i) => {
      formats.push(new Formats(i.id, i.name));
    });
    return formats;
  }

  intoCountries(arr, countries) {
    arr.forEach((i) => {
      countries.push(new Country(i.id, i.name));
    });
    return countries;
  }

  intoCities(arr, cities) {
    arr.forEach((i) => {
      cities.push(new Cities(i.id, i.countryId,  i.name));
    });
    return cities;
  }

  intoCompanies(arr, companies) {
    arr.forEach((i) => {
      companies.push(new Companies(i.id, i.cityId,  i.name));
    });
    return companies;
  }

}
