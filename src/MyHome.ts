import { Person } from "./Person";

export class MyHome implements Mappable {
  private location: {
    lat: number;
    lng: number;
  };

  get getLocation() {
    return this.location;
  }

  constructor(passenger: Person) {
    this.location = {
      lat: passenger.getLocation.lat + 2.0002,
      lng: passenger.getLocation.lng + 2.0001,
    };
  }
}
