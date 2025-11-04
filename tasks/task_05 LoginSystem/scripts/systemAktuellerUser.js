export default class AktuellerUserSys {
  #AKTUELLER_USER_SCHLUESSEL = "aktuellerUser";

  GibAktuellerUser() {
    return JSON.parse(sessionStorage.getItem("aktuellerUser"));
  }
  SpeichereAktuellerUser(user) {
    sessionStorage.setItem(
      this.#AKTUELLER_USER_SCHLUESSEL,
      JSON.stringify(user)
    );
  }
  EntferneAktuellerUser() {
    sessionStorage.removeItem(this.#AKTUELLER_USER_SCHLUESSEL);
  }
}
