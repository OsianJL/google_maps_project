import { Person } from "./Person";
import { randFullName, randLatitude, randLongitude } from '@ngneat/falso';

export class Passenger extends Person {
  constructor() {
    super(randFullName(), {
      lat: randLatitude(),
      lng: randLongitude(),
    });
  }
}
