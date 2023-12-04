document.querySelector("h1").textContent = "[ da Film Game! ]";
//initialising const
const DIRECTORS = ["steven spielberg", "ridley scott", "martin scorsese"];
const STEVEN_FILMS = ["e.t", "jaws", "hook", "jurassic park", "catch me if you can"];
const RIDLEY_FILMS = ["alien", "hannibal", "gladiator", "blade runner", "thelma & louise"];
const MARTIN_FILMS = ["taxi driver", "goodfellas", "casino", "gangs of new york", "the aviator"];
const STEVEN_TIPS = ["Extraterrest?", "Sharks?", "Peter Pan?", "Dinosaur?", "Fake Airplane Pilot?"];
const RIDLEY_TIPS = ["Green monster?", "Cannibalism?", "Warriors?", "B.... Run...", "Thelma &?"];
const MARTIN_TIPS = ["nyc taxi?", "mafia fellows?", "the bank always wins", "dicaprio in some gangs?", "dicaprio is a pilot?"];

// initialising some variables
let stevenPick = STEVEN_FILMS[Math.floor(Math.random() * STEVEN_FILMS.length)];
let ridleyPick = RIDLEY_FILMS[Math.floor(Math.random() * STEVEN_FILMS.length)];
let martinPick = MARTIN_FILMS[Math.floor(Math.random() * STEVEN_FILMS.length)];
let guessFilm = [];

let directorChoice = prompt(
  " ~~~ INSTRUCTIONS ~~~ \n" + "[- Choose your Film Director - ]\n" + "  ~~~Choose Between ~~~ \n" + "[- Steven Spielberg -  ]\n" + "[- Ridley Scott - ]\n" + "[- Martin Scorsese - ]"
);

directorChoice = directorChoice.toLowerCase();

// play function
const playGame = () => {
  alert("Alright, now let's be smart" + "\nYou've picked a great Director" + "\nCan you guess the correct movie?");

  if (directorChoice === DIRECTORS[0]) {
    for (let attempt = 1; attempt <= 5; attempt++) {
      let underscores = stevenPick
        .split("")
        .map((char) => (char === " " ? "   " : "_ "))
        .join("");

      if (attempt <= 2) {
        guessFilm = prompt(
          `Attempt ${attempt}: ` +
            `\nThe Film You Need to guess` +
            `\nHas ${stevenPick.length} characters (including spaces)` +
            `\nThis is how it should look` +
            `\n${underscores}` +
            `\nMake your guess now!`
        );
      } else if (attempt >= 3 && attempt <= 5) {
        let newSteveTips = STEVEN_TIPS[STEVEN_FILMS.indexOf(stevenPick)];
        guessFilm = prompt(
          `Attempt ${attempt}: ` +
            `\nThe Film You Need to guess` +
            `\nHas ${stevenPick.length} characters (including spaces)` +
            `\nHere comes a TIP for ya` +
            `\n~~~~~~~~~~~~~~~~~~~~~~~~` +
            `\n${newSteveTips}` +
            `\n~~~~~~~~~~~~~~~~~~~~~~~~` +
            `\n${underscores}` +
            `\nC'mon You Got this!`
        );
      }

      if (guessFilm !== null) {
        if (guessFilm.toLowerCase() === stevenPick) {
          alert("Congratulations, you're a LEGEND!!");
          break;
        } else if (attempt >= 5) {
          alert("Sorry, you're out of attempts!");
          break;
        } else {
          alert("Incorrect guess. Try again!");
        }
      } else {
        alert("You gave up! You really SUCK dude ;)");
        break;
      }
    }
  } else if (directorChoice === DIRECTORS[1]) {
    for (let attempt = 1; attempt <= 5; attempt++) {
      let underscores = stevenPick
        .split("")
        .map((char) => (char === " " ? "   " : "_ "))
        .join("");

      if (attempt <= 2) {
        guessFilm = prompt(
          `Attempt ${attempt}: ` +
            `\nThe Film You Need to guess` +
            `\nHas ${ridleyPick.length} characters (including spaces)` +
            `\nThis is how it should look` +
            `\n${underscores}` +
            `\nMake your guess now!`
        );
      } else if (attempt >= 3 && attempt <= 5) {
        let newRidleyTips = RIDLEY_TIPS[RIDLEY_FILMS.indexOf(ridleyPick)];
        guessFilm = prompt(
          `Attempt ${attempt}: ` +
            `\nThe Film You Need to guess` +
            `\nHas ${ridleyPick.length} characters (including spaces)` +
            `\nHere comes a TIP for ya` +
            `\n~~~~~~~~~~~~~~~~~~~~~~~~` +
            `\n${newRidleyTips}` +
            `\n~~~~~~~~~~~~~~~~~~~~~~~~` +
            `\n${underscores}` +
            `\nC'mon You Got this!`
        );
      }

      if (guessFilm !== null) {
        if (guessFilm.toLowerCase() === ridleyPick) {
          alert("Congratulations, you're a LEGEND!!");
          break;
        } else if (attempt >= 5) {
          alert("Sorry, you're out of attempts!");
          break;
        } else {
          alert("Incorrect guess. Try again!");
        }
      } else {
        alert("You gave up! You really SUCK dude ;)");
        break;
      }
    }
  } else if (directorChoice === DIRECTORS[2]) {
    for (let attempt = 1; attempt <= 5; attempt++) {
      let underscores = martinPick
        .split("")
        .map((char) => (char === " " ? "   " : "_ "))
        .join("");

      if (attempt <= 2) {
        guessFilm = prompt(
          `Attempt ${attempt}: ` +
            `\nThe Film You Need to guess` +
            `\nHas ${martinPick.length} characters (including spaces)` +
            `\nThis is how it should look` +
            `\n${underscores}` +
            `\nMake your guess now!`
        );
      } else if (attempt >= 3 && attempt <= 5) {
        let newMartinTips = MARTIN_TIPS[MARTIN_FILMS.indexOf(martinPick)];
        guessFilm = prompt(
          `Attempt ${attempt}: ` +
            `\nThe Film You Need to guess` +
            `\nHas ${martinPick.length} characters (including spaces)` +
            `\nHere comes a TIP for ya` +
            `\n~~~~~~~~~~~~~~~~~~~~~~~~` +
            `\n${newMartinTips}` +
            `\n~~~~~~~~~~~~~~~~~~~~~~~~` +
            `\n${underscores}` +
            `\nC'mon You Got this!`
        );
      }

      if (guessFilm !== null) {
        if (guessFilm.toLowerCase() === martinPick) {
          alert("Congratulations, you're a LEGEND!!");
          break;
        } else if (attempt >= 5) {
          alert("Sorry, you're out of attempts!");
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
