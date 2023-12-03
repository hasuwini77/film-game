document.querySelector("h1").textContent = "[ da Film Game! ]";
//initialising const
const DIRECTORS = ["steven spielberg", "ridley scott", "martin scorsese"];
const STEVEN_FILMS = [
  "e.t",
  "jaws",
  "hook",
  "jurassic park",
  "catch me if you can",
];
const RIDLEY_FILMS = [
  "alien",
  "hannibal",
  "gladiator",
  "blade Runner",
  "thelma & louise",
];
const MARTIN_FILMS = [
  "taxi driver",
  "goodfellas",
  "casino",
  "gangs of new york",
  "the aviator",
];

// initialising some let
let stevenPick = STEVEN_FILMS[Math.floor(Math.random() * STEVEN_FILMS.length)];
let ridleyPick = RIDLEY_FILMS[Math.floor(Math.random() * STEVEN_FILMS.length)];
let martinPick = MARTIN_FILMS[Math.floor(Math.random() * STEVEN_FILMS.length)];
let guessFilm = [];

let directorChoice = prompt(
  " ~~~ INSTRUCTIONS ~~~ \n" +
    "[- Choose your Film Director - ]\n" +
    "  ~~~Choose Between ~~~ \n" +
    "[- Steven Spielberg -  ]\n" +
    "[- Ridley Scott - ]\n" +
    "[- Martin Scorsese - ]"
);

directorChoice = directorChoice.toLowerCase();

// play function
const playGame = () => {
  alert(
    "Alright, now let's be smart" +
      "\nYou've picked a great Director" +
      "\nCan you guess the correct movie?"
  );

  if (directorChoice === DIRECTORS[0]) {
    for (let attempt = 1; attempt <= 5; attempt++) {
      let underscores = stevenPick
        .split("")
        .map((char) => (char === " " ? "   " : "_ "))
        .join("");
      guessFilm = prompt(
        `Attempt ${attempt}: ` +
          `\n The Film You Need to guess` +
          `\nHas ${stevenPick.length} characters (including spaces)` +
          `\nThis is how it should look` +
          `\n${underscores}` +
          `\nMake your guess now!`
      );

      if (guessFilm !== null) {
        if (guessFilm.toLowerCase() === stevenPick) {
          alert("Congratulations, you got it right!");
          break;
        } else {
          alert("Incorrect guess. Try again!");
        }
      } else {
        alert("You gave up! You really SUCK dude ;)");
        break;
      }
    }
  }
};

if (DIRECTORS.includes(directorChoice)) {
  alert("You do have great Taste" + "\n I would have chosen the same ;)");
  playGame();
} else {
  console.log("Invalid director choice!");
}
