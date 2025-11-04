import AktuellerUserSys from "./scripts/systemAktuellerUser.js";

const aktuellerUserSys = new AktuellerUserSys();
const user = aktuellerUserSys.GibAktuellerUser();

const containerEl = document.querySelector(".container");

if (user) {
  containerEl.innerHTML = `<h1 style="color: #fff">
        Willkommen, <span class="aktueller__username"></span>
      </h1>
      <a href="./index.html" class="link ausgangBtn">Ausgang</a>`;

  let ausgangBtnEl = document.querySelector(".ausgangBtn");
  let usernameEl = document.querySelector(".aktueller__username");

  usernameEl.textContent = user.username;

  ausgangBtnEl.addEventListener("click", (e) => {
    aktuellerUserSys.EntferneAktuellerUser();
  });
} else {
  alert("Sie sind unbekannt...");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 800);
}
