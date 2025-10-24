const karteSpiel = [
  {
    id: "1",
    img: "./img/kater_1.jpg",
    alt: "kater_1",
  },
  {
    id: "2",
    img: "./img/kater_2.jpg",
    alt: "kater_2",
  },
  {
    id: "3",
    img: "./img/kater_3.jpg",
    alt: "kater_3",
  },
  {
    id: "4",
    img: "./img/kater_4.jpg",
    alt: "kater_4",
  },
  {
    id: "5",
    img: "./img/kater_5.jpg",
    alt: "kater_5",
  },
  {
    id: "6",
    img: "./img/kater_6.jpg",
    alt: "kater_6",
  },
  {
    id: "7",
    img: "./img/kater_7.jpg",
    alt: "kater_7",
  },
  {
    id: "8",
    img: "./img/kater_8.jpg",
    alt: "kater_8",
  },
  {
    id: "9",
    img: "./img/kater_9.jpg",
    alt: "kater_9",
  },
  {
    id: "10",
    img: "./img/kater_10.jpg",
    alt: "kater_10",
  },
];

let kartenElement = document.querySelector("#karten");
let btnNeuesSpielEl = document.querySelector(".menu__button");
let punkteEl = document.querySelector(".menu__punkte");
let heroStartEl = document.querySelector(".hero__start");
let heroSiegEl = document.querySelector(".hero__sieg");
let erhoehungEl = document.querySelector(".menu__erhoehung");

let lvl = [];
let gefunden = 0;
let karte1 = null;
let karte2 = null;
let klickVerboten = false;

btnNeuesSpielEl.addEventListener("click", StarteSpiel);
kartenElement.addEventListener("click", KarteKlick);

function StarteSpiel() {
  heroStartEl.classList.add("unaktiv");
  heroSiegEl.classList.add("unaktiv");
  kartenElement.innerHTML = "";
  punkteEl.textContent = "0";
  lvl = [];
  gefunden = 0;
  karte1 = null;
  karte2 = null;

  for (let i = 0; i < karteSpiel.length; i++) {
    lvl.push(karteSpiel[i]);
    lvl.push(karteSpiel[i]);
  }

  lvl = lvl.sort(() => Math.random() - 0.5);

  let liElementen = lvl
    .map(
      ({ id, img, alt }) => `<li class="karte" data-id="${id}">
            <div class="karte__container">
              <div class="vorderseite"> 
                 <h1>Wo</h1>
                 <p>sind</p>
                 <p>die Katzen?</p>
              </div>
              <div class="rueckseite">
               <img src="${img}" alt="${alt}"></div>
            </div>
          </li>`
    )
    .join("");

  kartenElement.innerHTML = liElementen;
}
function KarteKlick(e) {
  const karte = e.target.closest(".karte");
  if (!karte || karte.classList.contains("isOpen") || klickVerboten) return;

  karte.classList.add("isOpen");

  if (!karte1) {
    karte1 = karte;
    return;
  }

  karte2 = karte;
  klickVerboten = true;

  const id1 = karte1.dataset.id;
  const id2 = karte2.dataset.id;

  if (id1 === id2) {
    gefunden++;
    erhoehungEl.classList.add("aktiv");
    punkteEl.textContent = gefunden;

    setTimeout(() => {
      erhoehungEl.classList.remove("aktiv");
    }, 800);

    karte1 = null;
    karte2 = null;

    klickVerboten = false;

    if (gefunden === lvl.length / 2) {
      setTimeout(() => {
        kartenElement.innerHTML = "";
        heroSiegEl.classList.remove("unaktiv");
      }, 1000);
    }
  } else {
    setTimeout(() => {
      karte1.classList.remove("isOpen");
      karte2.classList.remove("isOpen");

      karte1 = null;
      karte2 = null;

      klickVerboten = false;
    }, 1000);
  }
}
