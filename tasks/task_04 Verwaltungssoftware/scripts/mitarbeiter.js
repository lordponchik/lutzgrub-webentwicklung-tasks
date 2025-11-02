import { v4 as uuidv4 } from "https://jspm.dev/uuid";

export default class Mitarbeiter {
  constructor({ vorname, nachname, urlaubstage, krankheittage }) {
    this.id = uuidv4();
    this.vorname = vorname;
    this.nachname = nachname;
    this.urlaubstage = urlaubstage;
    this.krankheittage = krankheittage;
  }
}
