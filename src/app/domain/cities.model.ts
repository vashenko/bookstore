export class Cities {
  id: string;
  countryId: string;
  name: string;

  constructor(id: string, countryId: string, name: string) {
    this.id = id;
    this.countryId = countryId;
    this.name = name;
  }
}
