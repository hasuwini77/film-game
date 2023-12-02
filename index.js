document.querySelector("h1").textContent = "[ - a Film Game - ]"
//initialising const
const DIRECTORS = ["steven spielberg", "ridley scott", "martin scorsese"]; 
const STEVEN_FILMS = ["e.t", "jaws", "hook", "jurassic park", "catch me if you can"]; 
const RIDLEY_FILMS = ["alien", "hannibal", "gladiator", "blade Runner", "thelma & louise"];
const MARTIN_FILMS = ["taxi driver", "goodfellas", "casino", "gangs of new york", "the aviator"];

let directorChoice = prompt(" ~~~ INSTRUCTIONS ~~~ \n" +
                          "[- Choose your Film Director - ]\n" +
                          "  ~~~Choose Between ~~~ \n" +
                          "[- Steven Spielberg -  ]\n" +
                          "[- Ridley Scott - ]\n" +
    "[- Martin Scorsese - ]");
                        
directorChoice = directorChoice.toLowerCase();
    
if (DIRECTORS.includes(directorChoice)) {
    alert("You do have great Taste" + 
        "\n I would have chosen the same ;)")
    
} else {
    console.log("Invalid director choice!");
}