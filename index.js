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
let myRegex = /^[a-zA-Z\s]+$/; // User verification with regex here for the directorChoice

let directorChoice;

// verification of letters
if (myRegex.test(directorChoice) === false) {
  alert("You need to enter letters dude!\nFrom A-Z or a-z, yeah?");
}

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
        guessFilm = prompt(`Attempt ${attempt}: ` + `\nThe Film You Need to guess` + `\nHas ${stevenPick.length} characters (including spaces)` + `\nThis is how it should look` + `\n${underscores}` + `\nMake your guess now!`);
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
      let underscores = ridleyPick
        .split("")
        .map((char) => (char === " " ? "   " : "_ "))
        .join("");

      if (attempt <= 2) {
        guessFilm = prompt(`Attempt ${attempt}: ` + `\nThe Film You Need to guess` + `\nHas ${ridleyPick.length} characters (including spaces)` + `\nThis is how it should look` + `\n${underscores}` + `\nMake your guess now!`);
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
          alert(`Sorry, you're out of attempts!` + `\n ** YOU LOST DA GAME!! **`);
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
        guessFilm = prompt(`Attempt ${attempt}: ` + `\nThe Film You Need to guess` + `\nHas ${martinPick.length} characters (including spaces)` + `\nThis is how it should look` + `\n${underscores}` + `\nMake your guess now!`);
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
          alert(`Sorry, you're out of attempts!` + `\n ** YOU LOST DA GAME ** `);
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

// New fix with two while loops
// One for handling the replay of the game + one for the valid choice or not
let playAgain = true;

while (playAgain) {
  let isValidChoice = false;

  while (!isValidChoice) {
    const userInput = prompt(" ~~~ INSTRUCTIONS ~~~ \n" + "[- Choose your Film Director - ]\n" + "  ~~~Choose Between ~~~ \n" + "[- Steven Spielberg -  ]\n" + "[- Ridley Scott - ]\n" + "[- Martin Scorsese - ]");

    if (userInput === null) {
      const userDecision = confirm("C'mon dude you suck! Don't you want to play the game?");
      if (userDecision) {
        break;
      } else {
        playAgain = false;
        break;
      }
    }

    directorChoice = userInput.toLowerCase();

    if (DIRECTORS.includes(directorChoice) && myRegex.test(directorChoice)) {
      alert("You do have great taste!\nI would have chosen the same ;)");
      playGame(directorChoice);
      isValidChoice = true;
      const userDecision = confirm("Maybe, you wanna play again?");
      if (!userDecision) {
        playAgain = false;
      }
    } else if (myRegex.test(directorChoice) === false) {
      alert("You need to enter letters dude!\nFrom A-Z or a-z, yeah?");
    } else {
      alert("Invalid director choice!");
    }
  }
}
