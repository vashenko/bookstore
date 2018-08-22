import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookComponent } from './book/book.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { SearchComponent } from './search/search.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";


import {BooksService} from "./services/books-service";
import {DataConvertService} from "./services/convert-data.service";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SearchService} from "./services/search.service";
import {InterceptorModule} from "./services/interceptor";


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    NavigationComponent,
    ShowcaseComponent,
    SearchComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    InterceptorModule

  ],
  providers: [BooksService, DataConvertService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
