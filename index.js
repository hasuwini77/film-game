document.querySelector("h1").textContent = "[ - a Film Game - ]"
//initialising const
const DIRECTORS = ["steven spielberg", "ridley scott", "martin scorsese"]; 
const STEVEN_FILMS = ["e.t", "jaws", "hook", "jurassic park", "catch me if you can"]; 
const RIDLEY_FILMS = ["alien", "hannibal", "gladiator", "blade Runner", "thelma & louise"];
const MARTIN_FILMS = ["taxi driver", "goodfellas", "casino", "gangs of new york", "the aviator"];

// initialising some let
let stevenPick = STEVEN_FILMS[Math.floor(Math.random() * STEVEN_FILMS.length)];
let ridleyPick = RIDLEY_FILMS[Math.floor(Math.random() * STEVEN_FILMS.length)];
let martinPick = MARTIN_FILMS[Math.floor(Math.random() * STEVEN_FILMS.length)];
let guessFilm = []; 

let directorChoice = prompt(" ~~~ INSTRUCTIONS ~~~ \n" +
                          "[- Choose your Film Director - ]\n" +
                          "  ~~~Choose Between ~~~ \n" +
                          "[- Steven Spielberg -  ]\n" +
                          "[- Ridley Scott - ]\n" +
    "[- Martin Scorsese - ]");
                        
directorChoice = directorChoice.toLowerCase();


// play function 
const playGame = () => { 
    alert(" Alright, now let's be smart " +
        " \n You've picked a great Director" +
        " \n Can you guess the correct movie? "); 
    if (directorChoice === DIRECTORS[0]) { 
       let underscores = stevenPick.split('').map(char => (char === ' ' ? '   ' : '_ ')).join('');
        guessFilm = prompt(`The Film You Need to guess` +
            `\n Has ${stevenPick.length} characters (including spaces)` +
            `\n This is how it should look` +
            `\n ${underscores}` + 
            `\n Make your guess now!`)
        if (guessFilm !== null) { 
            if (guessFilm.toLowerCase() === stevenPick) {
                alert("Congratulation my dude!")
            }
         } else { alert("You suck! ")}
    }
}
    
if (DIRECTORS.includes(directorChoice)) {
    alert("You do have great Taste" + 
        "\n I would have chosen the same ;)")
    playGame()
   
} else {
    console.log("Invalid director choice!");
}