import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms"
import {BooksService} from "../services/books-service";
import {Formats} from "../domain/formats.model";
import {Country} from "../domain/coutry.model";
import {Cities} from "../domain/cities.model";
import {Companies} from "../domain/companies.model";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})

export class BookComponent implements OnInit {
  formats: Formats[];
  countries: Country[];
  cities: Cities[];
  companies: Companies[];

  addNewBookForm: FormGroup;

  author: FormControl;
  title: FormControl;
  isbn: FormControl;
  pages: FormControl;
  format: FormControl;
  description: FormControl
  price: FormControl;
  country: FormControl;
  city: FormControl;
  company: FormControl;

  constructor(private booksService: BooksService) {
    this.initFormControllers();
    this.initFormGroup();
  }

  ngOnInit() {
    this.booksService.getFormats().subscribe((formats) => {
      this.formats = formats;
    });

    this.booksService.getCountries().subscribe((countries) => {
      this.countries = countries;
    });

    this.booksService.getCities().subscribe((cities) => {
      this.cities = cities;
    });

    this.booksService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    });
  }

  initFormGroup() {
    this.addNewBookForm = new FormGroup({
      'author': this.author,
      'title': this.title,
      'isbn': this.isbn,
      'format': this.format,
      'description': this.description,
      'price': this.price,
      'pages': this.pages,
      'country': this.country,
      'city': this.city,
      'company': this.company
    })
  }

  initFormControllers() {
    this.author = new FormControl('', Validators.required);
    this.title = new FormControl('', Validators.required);
    this.isbn = new FormControl('', Validators.required);
    this.format = new FormControl('', Validators.required);
    this.description = new FormControl();
    this.price = new FormControl('', Validators.required);
    this.pages = new FormControl('', Validators.required);
    this.country = new FormControl();
    this.city = new FormControl();
    this.company = new FormControl();
  }

  sendData() {
    if (this.addNewBookForm.valid) {
      this.booksService.createBook((this.addNewBookForm.value));
      this.addNewBookForm.reset();
    }
  }

}
