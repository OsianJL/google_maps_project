import { randFullName, randLatitude, randLongitude } from '@ngneat/falso';
import { Person } from "./Person";

export class Driver extends Person {
  constructor() {
    super(randFullName(), {
      lat: randLatitude(),
      lng: randLongitude(),
    });
  }
}