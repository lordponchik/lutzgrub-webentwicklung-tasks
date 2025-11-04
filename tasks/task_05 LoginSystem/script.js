import AktuellerUserSys from "./scripts/systemAktuellerUser.js";

const aktuellerUserSys = new AktuellerUserSys();

aktuellerUserSys.EntferneAktuellerUser();

let anmeldenFormEl = document.getElementById("anmeldenForm");
let registrierenFormEl = document.getElementById("registrierenForm");

let folieEl = document.querySelectorAll(".folie");
let linkEl = document.querySelectorAll(".link");

linkEl.forEach((el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();

    const target = e.target.getAttribute("data-target");

    folieEl.forEach((folie) => {
      if (folie.classList.contains(target)) folie.classList.remove("hidden");
      else folie.classList.add("hidden");
    });
  })
);

anmeldenFormEl.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("login").value.trim();
  let passwort = document.getElementById("passwort").value.trim();

  let user = LadenUsers().find(
    (u) => u.username === username && u.passwort === passwort
  );

  if (user) {
    aktuellerUserSys.SpeichereAktuellerUser(user);
    window.location.href = "userseite.html";
  } else {
    alert("Ungültiger Benutzername oder Passwort!");
  }
});

registrierenFormEl.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("reg-login").value.trim();
  let passwort = document.getElementById("reg-passwort").value.trim();

  let user = LadenUsers().find((u) => u.username === username);

  if (user) {
    alert("Benutzer mit diesem Login ist schon existiert");
    return;
  } else if (username.length < 5) {
    alert("Username muss mindestens 5 Zeichen lang sein!");
    return;
  } else if (passwort.length < 6) {
    alert("Passwort muss mindestens 5 Zeichen lang sein!");
    return;
  } else {
    let users = LadenUsers();

    users.push({
      username,
      passwort,
    });

    SpeicherUser(users);
    aktuellerUserSys.SpeichereAktuellerUser(user);
    window.location.href = "userseite.html";
  }
});

function LadenUsers() {
  let users = JSON.parse(localStorage.getItem("USERS")) || [];

  return users;
}
function SpeicherUser(users) {
  localStorage.setItem("USERS", JSON.stringify(users));
}
