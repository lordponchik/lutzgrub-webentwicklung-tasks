import MitarbeiterListe from "./mitarbeiterListe.js";
let mitarbeiterListe = new MitarbeiterListe();
let backdropElement = document.querySelector(".backdrop");

export default class SystemUI {
  #HAUPT_MENU = "HAUPT";
  #ANLEGEN_MENU = "ANLEGEN";
  #VERWALTEN_MENU = "VERWALTEN";

  #hauptContainerEl = null;

  constructor() {
    this.#hauptContainerEl = document.querySelector(".hauptContainer");
  }

  OeffneFenster(fensterName = this.#HAUPT_MENU) {
    this.#hauptContainerEl.innerHTML = "";

    switch (fensterName) {
      case this.#HAUPT_MENU:
        this.#hauptContainerEl.innerHTML = this.#ErstellHauptMenu();
        this.#FuegeHauptMenuZuhoererHinzu();
        break;
      case this.#ANLEGEN_MENU:
        this.#hauptContainerEl.innerHTML = this.#ErstellAnlegenMenu();
        this.#FuegeAnlegenMenuZuhoererHinzu();
        break;
      case this.#VERWALTEN_MENU:
        this.#hauptContainerEl.innerHTML = this.#ErstellVerwaltenMenu();
        this.#FuegeVerwaltenMenuZuhoererHinzu();
    }
  }

  #ErstellHauptMenu() {
    return `<div class="zentrierteContainer">
      <h1>Verwaltungssoftware</h1>
      <ul>
        <li><button type="button" class="anlegenBtn">Mitarbeiter anlegen</button></li>
        <li><button type="button" class="verwaltenBtn">Mitarbeiter verwalten</button></li>
      </ul></div>`;
  }
  #FuegeHauptMenuZuhoererHinzu() {
    let anlegenBtnElement = document.querySelector(".anlegenBtn");
    let verwaltenBtn = document.querySelector(".verwaltenBtn");

    anlegenBtnElement.addEventListener("click", () => {
      this.OeffneFenster(this.#ANLEGEN_MENU);
    });

    verwaltenBtn.addEventListener("click", () => {
      this.OeffneFenster(this.#VERWALTEN_MENU);
    });
  }
  #ErstellAnlegenMenu(
    { vorname, nachname, urlaubstage, krankheittage } = {
      vorname: "",
      nachname: "",
      urlaubstage: 0,
      krankheittage: 0,
    }
  ) {
    return `<div class="zentrierteContainer">
            ${`<h1>Mitarbeiter anlegen</h1>
      <form class="form">
        <div>
          <label for="vorname">Vorname</label>
          <input type="text" name="vorname" id="vorname" value="${vorname}"/>
        </div>
        <div>
          <label for="nachname">Nachname</label>
          <input type="text" name="nachname" id="nachname" value="${nachname}" />
        </div>
        <div>
          <label for="urlaubstage">Urlaubstage</label>
          <input type="number" name="urlaubstage" id="urlaubstage" min="0"  value="${urlaubstage}"/>
        </div>
        <div>
          <label for="krankheittage">Krankheittage</label>
          <input
            type="number"
            name="krankheittage"
            id="krankheittage"
            min="0" value="${krankheittage}"
          />
        </div>
        <button type="submit" class="submitBtn">Anlegen</button>
        <button type="button" class="abbrBtn">Abbrechen</button>
      </form>`}
          </div>`;
  }
  #FuegeAnlegenMenuZuhoererHinzu() {
    let abbrechenElement = document.querySelector(".abbrBtn");
    let formElement = document.querySelector(".form");

    formElement.addEventListener("submit", (e) => {
      e.preventDefault();

      mitarbeiterListe.FuegeMitarbieterHinzu(new FormData(formElement));

      backdropElement.children[0].innerHTML = `<p class="nachricht">Mitarbeiter wurde erstellen</p>`;
      backdropElement.classList.toggle("isOpen");

      setTimeout(() => {
        backdropElement.children[0].innerHTML = "";
        backdropElement.classList.toggle("isOpen");
      }, 2000);

      this.OeffneFenster();
    });

    abbrechenElement.addEventListener("click", () => {
      this.OeffneFenster(this.#HAUPT_MENU);
    });
  }
  #ErstellVerwaltenMenu() {
    return `<div class="container">
      <span class="zuHauptMenuBtn">Zur Hauptseite</span>
      <h1>Mitarbeiter</h1>
      <table>
        <thead>
          <tr>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>Urlaubstage</th>
            <th>Krankheittage</th>
          </tr>
        </thead>
        <tbody class="tbody">
          ${mitarbeiterListe.liste
            .map(
              ({ id, vorname, nachname, urlaubstage, krankheittage }) =>
                `<tr draggable="true" data-id="${id}">
              <td>${vorname}</td>
              <td>${nachname}</td>
              <td>${urlaubstage}</td>
              <td>${krankheittage}</td>
              <td>
                <button class="aendernBtn" data-id=${id} type="button">Ä</button>
              </td>
              <td>
                <button class="entfBtn" data-id=${id} type="button">E</button>
              </td>
            </tr>`
            )
            .join("")}
        </tbody>
      </table>
    </div>`;
  }
  #FuegeVerwaltenMenuZuhoererHinzu() {
    const zuHauptMenuBtnElement = document.querySelector(".zuHauptMenuBtn");
    const modal = backdropElement.children[0];

    zuHauptMenuBtnElement.addEventListener("click", () => {
      this.OeffneFenster(this.#HAUPT_MENU);
    });

    const tbody = document.querySelector(".tbody");

    tbody.addEventListener("click", (e) => {
      const target = e.target;
      const id = target.dataset.id;

      if (target.classList.contains("aendernBtn")) {
        backdropElement.classList.add("isOpen");
        modal.dataset.id = id;
        modal.innerHTML = this.#ErstellAnlegenMenu(
          mitarbeiterListe.GibMitarbeiter(id)
        );
      }

      if (target.classList.contains("entfBtn")) {
        mitarbeiterListe.EntferneMitarbeiter(id);
        this.OeffneFenster(this.#VERWALTEN_MENU);
      }
    });

    this.#FuegeSortierungZuhoerer(tbody);

    modal.addEventListener("submit", (e) => {
      if (!e.target.classList.contains("form")) return;

      e.preventDefault();
      const id = modal.dataset.id;
      const formData = new FormData(e.target);

      mitarbeiterListe.AktualisiereMitarbeiter(
        id,
        Object.fromEntries(formData)
      );

      backdropElement.classList.remove("isOpen");
      modal.innerHTML = "";
      this.OeffneFenster(this.#VERWALTEN_MENU);
    });

    modal.addEventListener("click", (e) => {
      if (e.target.classList.contains("abbrBtn")) {
        backdropElement.classList.remove("isOpen");
        modal.innerHTML = "";
      }
    });
  }
  #FuegeSortierungZuhoerer(tbody) {
    let draggedRow = null;

    tbody.addEventListener("dragstart", (e) => {
      draggedRow = e.target.closest("tr");
      e.dataTransfer.effectAllowed = "move";
      e.target.classList.add("dragging");
    });

    tbody.addEventListener("dragover", (e) => {
      e.preventDefault();
      const targetRow = e.target.closest("tr");
      if (!targetRow || targetRow === draggedRow) return;

      const rect = targetRow.getBoundingClientRect();
      const isAfter = e.clientY - rect.top > rect.height / 2;

      targetRow.parentNode.insertBefore(
        draggedRow,
        isAfter ? targetRow.nextSibling : targetRow
      );
    });

    tbody.addEventListener("drop", (e) => {
      e.preventDefault();
      draggedRow = null;

      const ids = [...tbody.querySelectorAll("tr")].map((tr) => tr.dataset.id);
      mitarbeiterListe.SortiereNachReihenfolge(ids);
    });
    tbody.addEventListener("dragend", (e) => {
      e.target.classList.remove("dragging");
    });
  }
}
