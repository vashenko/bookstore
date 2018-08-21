export class Companies {
  id: string;
  cityId: string;
  name: string;

  constructor(id: string, cityId: string, name: string) {
    this.id = id;
    this.cityId = cityId;
    this.name = name;
  }
}
