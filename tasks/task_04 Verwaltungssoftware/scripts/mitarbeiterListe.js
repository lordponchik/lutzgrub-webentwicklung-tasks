import Mitarbeiter from "./mitarbeiter.js";

export default class MitarbeiterListe {
  #liste = [];

  constructor() {
    this.#liste = this.#LadenDaten() ?? [];
  }

  get liste() {
    return this.#liste;
  }

  FuegeMitarbieterHinzu(daten) {
    this.#liste.push(new Mitarbeiter(Object.fromEntries(daten)));

    this.#SpeichereDaten();
  }

  EntferneMitarbeiter(id) {
    this.#liste.splice(
      this.#liste.indexOf((el) => el.id === id),
      1
    );

    this.#SpeichereDaten();
  }

  GibMitarbeiter(id) {
    return this.#liste.find((el) => el.id === id);
  }

  AktualisiereMitarbeiter(id, neueDaten) {
    const index = this.#liste.findIndex((el) => el.id === id);

    if (index !== -1) {
      this.#liste[index] = {
        ...this.#liste[index],
        ...neueDaten,
      };
    }

    this.#SpeichereDaten();
  }

  SortiereNachReihenfolge(ids) {
    this.#liste.sort((x, y) => ids.indexOf(x.id) - ids.indexOf(y.id));

    this.#SpeichereDaten();
  }

  #LadenDaten() {
    return JSON.parse(localStorage.getItem("mitarbeiter"));
  }

  #SpeichereDaten() {
    localStorage.setItem("mitarbeiter", JSON.stringify(this.#liste));
  }
}
