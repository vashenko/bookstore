import {Optional} from "@angular/core";

export class Book {


  constructor(public author: string,
              @Optional() public cityId: string,
              @Optional() public companyId: string,
              @Optional() public countryId: string,
              @Optional() public description: string,
              public formatId: string,
              @Optional() public id: string,
              public isbn: string,
              public pages: string,
              public price: string,
              public title: string) {

  }

}
