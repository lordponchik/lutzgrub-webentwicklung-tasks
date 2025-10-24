let raum1 = {
  raum_1: {
    img: "https://cdn.pixabay.com/photo/2022/10/06/06/21/halloween-7502086_1280.jpg",
    beschreibung:
      "Du steigst die alten Holzstufen hinunter. </br>" +
      "Die Luft wird kälter. </br>" +
      "In der Ecke flackert ein schwaches Licht.</br>" +
      "Eine Kürbislaterne mit menschlichen Augen starrt dich an. </br>" +
      "„Oh, endlich jemand! Hilf mir, aus diesem Haus zu entkommen!“",
    antworten: [
      { text: "„In Ordnung, aber wer bist du überhaupt?“", next: "raum_1_1" },
      {
        text: "„Nein danke, einmal wurden mir schon Lügen von einer Kerze erzählt!“",
        next: "raum_1_2",
      },
      {
        text: "„Nur wenn du versprichst, meine Seele nicht zu essen.“",
        next: "raum_1_3",
      },
    ],
  },
  raum_1_1: {
    img: "https://cdn.pixabay.com/photo/2017/10/13/14/15/fantasy-2847724_1280.jpg",
    beschreibung:
      "„Ich war einst der Besitzer dieses Hauses… bis man mich in Dekoration verwandelt hat!“ </br>" +
      "Die Flamme flackert stärker, und im Spiegel hinter dir siehst du dein Spiegelbild – ohne Kopf.",
    antworten: [
      { text: "Du wirfst die Kerze auf den Spiegel.", next: "raum_1_1_1" },
      { text: "Du schreist und rennst nach oben.", next: "raum_1_1_2" },
      {
        text: "Du versuchst, zu scherzen: „Steht mir doch gut ohne Kopf, oder?“",
        next: "raum_1_1_3",
      },
    ],
  },
  raum_1_2: {
    img: "https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_1280.jpg",
    beschreibung:
      "Die Flamme erlischt. Hinter dir ein Flüstern: </br>" +
      "„Das wirst du bereuen…“ </br>" +
      "Ein kalter Atem streift deinen Nacken.",
    antworten: [
      { text: "Dich umdrehen.", next: "raum_1_2_1" },
      { text: "Dich tot stellen.", next: "raum_1_2_2" },
      { text: "Zum Ausgang rennen.", next: "raum_1_2_3" },
    ],
  },
  raum_1_3: {
    img: "https://cdn.pixabay.com/photo/2018/10/27/20/18/silhouette-3777403_1280.jpg",
    beschreibung:
      "„Ich esse keine Seelen – ich sammle sie!“ </br>" +
      "Die Flamme wird heller, und Fußspuren führen zu einer Truhe.",
    antworten: [
      { text: "Die Truhe öffnen.", next: "raum_1_3_1" },
      { text: "Sagen: „Mach du auf.“", next: "raum_1_3_2" },
      { text: "Dagegen treten.", next: "raum_1_3_3" },
    ],
  },
  raum_1_1_1: {
    img: "https://cdn.pixabay.com/photo/2020/10/04/17/55/halloween-5627096_1280.jpg",
    beschreibung:
      "Der Spiegel zerspringt, das Haus bebt. </br>" +
      "Plötzlich stehst du draußen – mit einer leuchtenden Kürbislampe in der Hand. </br>",
    ende: "“Befreier des Fluchs” – du hast die Seele gerettet, aber deine lebt nun im Kürbis.",
  },
  raum_1_1_2: {
    img: "https://cdn.pixabay.com/photo/2016/11/29/09/11/candles-1868640_1280.jpg",
    beschreibung:
      "Du rennst nach oben, aber die Tür ist verschlossen. Das Haus lacht. </br>" +
      "„Zu spät zum Laufen – die Party hat erst begonnen!“ </br" +
      "Du wirst zu einer blinkenden Lichterkette.",
    ende: "“Ewige Dekoration.”",
  },
  raum_1_1_3: {
    img: "https://cdn.pixabay.com/photo/2017/10/29/12/37/halloween-2899638_1280.jpg",
    beschreibung:
      "Das Haus seufzt. </br>" +
      "„Na gut… wenigstens einer mit Humor. Geh schon!“",
    ende: "“Der überlebende Komiker.”",
  },
  raum_1_2_1: {
    img: "https://cdn.pixabay.com/photo/2017/08/06/18/05/pumpkin-2594747_1280.jpg",
    beschreibung: "Niemand ist da – aber du hast keinen Schatten mehr.",
    ende: "“Schattenlos.”",
  },
  raum_1_2_2: {
    img: "https://cdn.pixabay.com/photo/2017/10/26/20/00/pumpkin-2892303_1280.jpg",
    beschreibung:
      "Das Flüstern verstummt. Dann hörst du: </br>" +
      "„Oh, Statuen bewegen sich jetzt? Interessant!“",
    ende: "“Gefressener Beobachter.”",
  },
  raum_1_2_3: {
    img: "https://cdn.pixabay.com/photo/2019/10/28/21/21/halloween-4585684_1280.jpg",
    beschreibung:
      "Du rennst raus, fällst in eine Pfütze, und siehst ein Schild: </br>" +
      "„Escape-Room ‘Kevins Horrorhaus’ – geschafft!“",
    ende: "Der erschrockene Gewinner.",
  },
  raum_1_3_1: {
    img: "https://cdn.pixabay.com/photo/2022/10/22/16/55/spider-web-7539609_1280.jpg",
    beschreibung:
      "Drinnen liegt ein Bonbon mit der Aufschrift „Iss mich – und erfahre die Wahrheit“. </br>" +
      "Du isst es und wirst zu einer kleinen Kerze in einem neuen Kürbis.",
    ende: "“Ewige Flamme.”",
  },
  raum_1_3_2: {
    img: "https://cdn.pixabay.com/photo/2022/09/21/10/27/pumpkins-7469995_1280.jpg",
    beschreibung:
      "Die Truhe öffnet sich selbst und zeigt einen Spiegel. </br>" +
      "Im Spiegel bist du der neue Hausbesitzer.",
    ende: "“Erbe des Fluchs.”",
  },
  raum_1_3_3: {
    img: "https://cdn.pixabay.com/photo/2018/10/05/22/36/metal-3726995_1280.jpg",
    beschreibung:
      "Die Truhe explodiert in einem Schauer aus Süßigkeiten.</br>" +
      "„Hurra! Du hast den Bann gebrochen!“",
    ende: "“Der König der Süßigkeiten.”",
  },
};
let raum2 = {
  raum_2: {
    img: "https://cdn.pixabay.com/photo/2015/04/16/21/10/skull-726253_1280.jpg",
    beschreibung:
      "Mit dem Besen in der Hand gehst du vorsichtig durch den Flur. </br>" +
      "Plötzlich klingelt es. </br>" +
      "Vor der Tür steht ein kleiner Junge im Vampirkostüm. </br>" +
      "„Süßes oder Saures?“",
    antworten: [
      { text: "Ihm ein Bonbon geben.", next: "raum_2_1" },
      { text: "Sagen: „Ich hab nichts.“", next: "raum_2_2" },
      {
        text: "Scherzen: „Dann nimm das Saure, Süßes ist alle.“",
        next: "raum_2_3",
      },
    ],
  },
  raum_2_1: {
    img: "https://cdn.pixabay.com/photo/2015/01/05/19/29/winter-589600_1280.jpg",
    beschreibung:
      "Er lächelt – und verschwindet samt deinem Handy. </br>" +
      "Auf dem Display steht: </br>" +
      "„Du bist jetzt die Beute.“",
    antworten: [
      { text: "Nach draußen rennen.", next: "raum_2_1_1" },
      { text: "Dich in der Badewanne verstecken.", next: "raum_2_1_2" },
      { text: "Kevin anrufen.", next: "raum_2_1_3" },
    ],
  },
  raum_2_1_1: {
    img: "https://cdn.pixabay.com/photo/2017/06/08/00/00/devil-2382035_1280.jpg",
    beschreibung:
      "Draußen warten Hunderte Kinder im Vampirkostüm. Alle grinsen.",
    ende: "“Abendessen in Gesellschaft.”",
  },
  raum_2_1_2: {
    img: "https://cdn.pixabay.com/photo/2023/09/10/11/01/pumpkins-8244655_1280.jpg",
    beschreibung: "Du hörst Schritte, Lachen… und Tropfen.",
    ende: "“Stiller Schrecken.”",
  },
  raum_2_1_3: {
    img: "https://cdn.pixabay.com/photo/2021/09/16/16/10/halloween-6630497_1280.jpg",
    beschreibung: "„Hey, du bist im Level mit dem Vampir! Cool, oder?“",
    ende: "Der Troll-Regisseur.",
  },
  raum_2_2: {
    img: "https://cdn.pixabay.com/photo/2018/09/06/20/58/full-moon-3659317_1280.jpg",
    beschreibung:
      "Der Junge schnipst mit den Fingern – alles wird zu Schokolade. Auch du.",
    ende: "“Der Schokoladen-Monster.”",
  },
  raum_2_3: {
    img: "https://cdn.pixabay.com/photo/2022/09/21/10/27/pumpkins-7469993_1280.jpg",
    beschreibung:
      "„Endlich jemand mit Humor! Hier, nimm das.“</br>" +
      "Er gibt dir eine leuchtende Münze. </br>" +
      "„Einmal im Jahr darfst du sein, wer du willst.“",
    ende: "“Geschenk des Spaßmachers.”",
  },
};
let raum3 = {
  raum_3: {
    img: "https://cdn.pixabay.com/photo/2022/10/18/19/32/pumpkin-7531010_1280.jpg",
    beschreibung:
      "Du öffnest die Tür – darin kein Essen, sondern ein Portal aus Nebel. </br>" +
      "Daraus dringen Musik und der Duft von Zimt.",
    antworten: [
      { text: "Ins Portal gehen.", next: "raum_3_1" },
      { text: "Etwas hineinwerfen.", next: "raum_3_2" },
      { text: "Zuschließen und schlafen gehen.", next: "raum_3_3" },
    ],
  },
  raum_3_1: {
    img: "https://cdn.pixabay.com/photo/2020/05/04/16/37/fantasy-5129792_1280.jpg",
    beschreibung:
      "Du landest in einer Welt voller Kürbisse mit Menschenhänden. </br>" +
      "Eine Kürbis-Barkeeperin fragt: </br>" +
      "„Was darf’s sein, Fleischling?“",
    antworten: [
      { text: "„Einen Kürbis-Latte, bitte.“", next: "raum_3_1_1" },
      { text: "„Ich will nur nach Hause.“", next: "raum_3_1_2" },
      { text: "„Wo ist die Toilette?“", next: "raum_3_1_3" },
    ],
  },
  raum_3_1_1: {
    img: "https://cdn.pixabay.com/photo/2020/10/31/17/29/pumpkins-5701769_1280.jpg",
    beschreibung: "Der Drink schmeckt wunderbar – bis dein Kopf orange wird.",
    ende: "Liebhaber des Geschmacks.",
  },
  raum_3_1_2: {
    img: "https://cdn.pixabay.com/photo/2022/04/15/12/47/moon-7134419_1280.jpg",
    beschreibung:
      "„Das sagen alle…“ </br>" +
      "Du wachst im Bett auf. Auf dem Kissen steht: </br>" +
      "„Danke für deinen Besuch!“",
    ende: "“Der Besucher aus einer anderen Welt.”",
  },
  raum_3_1_3: {
    img: "https://cdn.pixabay.com/photo/2024/10/03/17/52/skeletons-9094416_1280.jpg",
    beschreibung: "Du öffnest eine Tür und fällst zurück in den Kühlschrank.",
    ende: "“Der Kreislauf der Portale.”",
  },
  raum_3_2: {
    img: "https://cdn.pixabay.com/photo/2016/09/03/01/36/halloween-1640885_1280.jpg",
    beschreibung:
      "Du wirfst einen Apfel hinein. Er fliegt zurück – angebissen.",
    ende: "“Die bestandene Probe – aber von wem?”",
  },
  raum_3_3: {
    img: "https://cdn.pixabay.com/photo/2018/10/04/04/46/cat-3722915_1280.jpg",
    beschreibung:
      "Du schläfst friedlich ein. </br>" +
      "Am Morgen hängt der Kühlschrank an der Decke.",
    ende: "“Die Kühlschrank-Gravitation.”",
  },
};

let spiel = {
  start: {
    titel: "Die Nacht des Lachens und des Grauens",
    img: "https://cdn.pixabay.com/photo/2016/09/29/11/56/halloween-1702677_1280.jpg",
    beschreibung:
      "Du wachst in einem dunklen Wohnzimmer auf. </br>" +
      "Draußen pfeift der Wind, Regen trommelt gegen das Fenster. </br>" +
      "Auf dem Boden liegen Kürbisse, Spinnweben aus Watte und leere Bonbonverpackungen. </br> " +
      "Anscheinend ist die Halloween- Party bei Kevin anders verlaufen, als du erwartet hast. </br>" +
      "An der Wand blinkt eine Lichterkette: </br>" +
      "Willkommen zum zweiten Teil der Party. </br>" +
      "Aus dem Keller hört man ein Knarren, als würde jemand langsam eine Tür öffnen.",
    antworten: [
      { text: "Du gehst in den Keller, um nachzusehen.", next: "raum_1" },
      { text: "Du nimmst den Besen und untersuchst das Haus.", next: "raum_2" },
      {
        text: "Du öffnest den Kühlschrank – vielleicht sind noch Süßigkeiten da.",
        next: "raum_3",
      },
    ],
  },
  ...raum1,
  ...raum2,
  ...raum3,
};

StarteSpiel();

function StarteSpiel() {
  let spielElement = document.querySelector(".spiel");

  let lvl = `<div class="spiel__container" style="background-image: url('${spiel.start.img}')">
                    <div class="spiel__content">
                        <h1>${spiel.start.titel}</h1>
                        <p>${spiel.start.beschreibung}</p>
                        <ul>${spiel.start.antworten
                          .map(
                            ({next, text}) =>
                              `<li><button class="btnNext" data-next=${next}>${text}</button></li>`).join("")}
                        </ul>
                    </div>
                </div>`;

  spielElement.insertAdjacentHTML("afterbegin", lvl);

  spielElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("btnNext")) {
      let nextRoom = e.target.getAttribute("data-next");
      let room = spiel[nextRoom];

      let nextlvl = `<div class="spiel__container" style="background-image: url('${room.img}')">
                        <div class="spiel__content">
                            <p>${room.beschreibung}</p>
                            ${room.antworten ? `<ul>${room.antworten.map(({next, text}) =>
                                                  `<li><button class="btnNext" data-next="${next}">${text}</button></li>`).join("")}
                                                </ul>`
                                             : `<div>
                                                  <p class="nachrichtEndeSpiel">Ende: ${room.ende}</p>
                                                  <button type="button" class="btnNeuerStart">Neuer Start</button>
                                                </div>`}
                          </div>
                      </div>`;

      spielElement.innerHTML = nextlvl;
    }

    if (e.target.classList.contains("btnNeuerStart")) {
      spielElement.innerHTML = "";
      StarteSpiel();
    }
  });
}


