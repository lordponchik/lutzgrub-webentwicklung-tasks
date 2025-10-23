let regForm = document.querySelector("#reg-form");
let btnRegistrieren = document.querySelector("#btn-registrieren");

document.addEventListener("DOMContentLoaded", ValidiereFormular);
regForm.addEventListener("input", ValidiereFormular);
regForm.addEventListener("focusout", ValidiereFormular);

regForm.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Danke für Registrierung!");

  e.target.reset();

  ValidiereFormular();
});

function ValidiereFormular() {
  let formData = new FormData(regForm);
  let alleAusgefuellt = true;

  for (let value of formData.values()) {
    if (!value || value.trim() === "") {
      alleAusgefuellt = false;
      break;
    }
  }

  if (alleAusgefuellt) {
    btnRegistrieren.removeAttribute("disabled");
    btnRegistrieren.removeAttribute("title");
  } else {
    btnRegistrieren.setAttribute("disabled", "disabled");
    btnRegistrieren.setAttribute(
      "title",
      "Sie müssen ganzes Formular ausfüllen"
    );
  }
}
