const outputRoundCounter = document.querySelector<HTMLDivElement>(".round-counter");
if(outputRoundCounter){
    outputRoundCounter.style.visibility= "hidden";
}

const counterDisplayNone = document.querySelector<HTMLDivElement>(".counter");

const outputPlayerScore = document.querySelector(".player-score");
const outputCompScore = document.querySelector(".computer-score");
const chosenIconPlayer = document.querySelector(".chosen-icon-player");
const chosenIconComputer = document.querySelector(".chosen-icon-computer");

const gameOutput = document.querySelector(".game-output");

const inputRock = document.querySelector(".input-rock");
const inputPaper = document.querySelector(".input-paper");
const inputScissors = document.querySelector(".input-scissors");

const playButtons = document.querySelector<HTMLDivElement>(".play-icons");

const background = document.querySelector<HTMLDivElement>(".wrapper");


//* 1. Variablen fuer die Speilstaende und Rundezahl und computerChoice

let playerPoints = 0;
let computerPoints = 0;

let currentRound = 0;

let computerChoice = "";






//*3. eventListener auf die jeweiligen Divs

inputRock?.addEventListener("click", () => playGame("✊")); 
inputPaper?.addEventListener("click", () => playGame("🤚")); 
inputScissors?.addEventListener("click", () => playGame("✌️"));

//*4. Hauptfunktion die ein Parameter mit der userChoice

function playGame(userChoice: string) {
    // * a. computerChoice FN ausfuehren

    //* 2. FN die dir eine zufaellige Computerchoice erzeugt (Math.random)

    const randomComputerNumber = (Math.floor(Math.random()*3)+1);
    console.log(randomComputerNumber);

    function randomComputerChoice () {
        if (randomComputerNumber === 1) {
            computerChoice = "✊";
        } else if (randomComputerNumber === 2) {
            computerChoice = "🤚"
        } else {
            computerChoice = "✌️"
        }
    }
    // randomComputerChoice();
    // console.log(computerChoice);
    randomComputerChoice(); 
    
    //* b. rundenAnzahl auslesen
    const roundsUserInput = document.querySelector<HTMLInputElement>("input[name='check']:checked");
    const totalRound = roundsUserInput?.value;
    console.log("gesamtrundenanzahl:", totalRound);

     //* b.2 checks ausblenden 
    
    if(counterDisplayNone){
        counterDisplayNone.style.visibility= "hidden";
    }

    //* d. runde hochzeahlen
    currentRound++;
    
    console.log("anzahl der clicks:", currentRound);
    
    //* c. runden ins HTML schreiben
    if(outputRoundCounter){
        outputRoundCounter.style.visibility= "visible";
        outputRoundCounter.innerHTML = `<p>${currentRound} / ${totalRound}</p>`;
    }
    console.log(outputRoundCounter);


  
    //e. wer hat gewonnen , wer hat verloren + Punkte verteilen -> if, else if, else
    if (userChoice === "✊" && computerChoice === "✌️" ||
        userChoice === "🤚" && computerChoice === "✊" ||
        userChoice === "✌️" && computerChoice === "🤚" ) {
            playerPoints++ ;

        } else if (userChoice === computerChoice){
            playerPoints++;
            computerPoints++;
        } else {
            computerPoints++;
        }

    if(userChoice === "✊"){
        if(chosenIconPlayer){
        chosenIconPlayer.innerHTML= `✊`;
        }
    } else if(userChoice === "🤚"){
        if(chosenIconPlayer){
            chosenIconPlayer.innerHTML= `🤚`;
            }
    } else {
        if(chosenIconPlayer){
            chosenIconPlayer.innerHTML= `✌️`;
            }
    }

    if(computerChoice === "✊"){
        if(chosenIconComputer){
            chosenIconComputer.innerHTML= `✊`;
        }
    } else if(computerChoice === "🤚"){
        if(chosenIconComputer){
            chosenIconComputer.innerHTML= `🤚`;
            }
    } else {
        if(chosenIconComputer){
            chosenIconComputer.innerHTML= `✌️`;
            }
    }

    //* f. spielstand  ins html
    if (outputCompScore && outputPlayerScore){
    outputPlayerScore.innerHTML = playerPoints.toString();
    outputCompScore.innerHTML = computerPoints.toString();
    }

    // * ausgabe für die Runden - in schriftlicher Form
    if(userChoice === "✊" && computerChoice === "✊"){
        if(gameOutput) gameOutput.innerHTML = "It was a draw! You both chose Rock"
    } else if(userChoice === "✌️" && computerChoice === "✌️"){
        if(gameOutput) gameOutput.innerHTML = "It was a draw! You both chose Scissor"
    } else if (userChoice === "🤚" && computerChoice === "🤚"){
        if(gameOutput) gameOutput.innerHTML = "It was a draw! You both chose Paper"
    } else if (userChoice === "✊" && computerChoice === "🤚"){
        if(gameOutput) gameOutput.innerHTML = "Paper beats Rock. You lose!"
    } else if (userChoice === "✊" && computerChoice === "✌️"){
        if(gameOutput) gameOutput.innerHTML = "Rock beats Scissors. You win!"
    } else if (userChoice === "🤚" && computerChoice === "✊"){
        if(gameOutput) gameOutput.innerHTML = "Paper beats Rock. You win!"
    } else if (userChoice === "🤚" && computerChoice === "✌️"){
        if(gameOutput) gameOutput.innerHTML = "Scissors beats Paper. You lose!"
    } else if (userChoice === "✌️" && computerChoice === "✊"){
        if(gameOutput) gameOutput.innerHTML = "Rock beats Scissors. You lose!"
    } else if (userChoice === "✌️" && computerChoice === "🤚"){
        if(gameOutput) gameOutput.innerHTML = "Scissors beats Paper. You win!"
    }
    

    //* g. wann ist das spiel zuende? 
    if(Number(currentRound) === Number(totalRound)) {
        //* ein html output wer hat gewonnen o. unentscieden 
        if(playerPoints > computerPoints){
            if(gameOutput && background){
                 gameOutput.innerHTML = "👉 You won !!! 👈";
                 background.style.backgroundColor = "rgb(49, 171, 116)";
            }
        } else if(playerPoints === computerPoints){
            if(gameOutput && background){
                gameOutput.innerHTML = "🫣 It's a draw 🫣";
                background.style.backgroundColor = "rgb(17, 49, 147)";
           }
        } else {
            if(gameOutput && background){
                gameOutput.innerHTML = "Loser. 🥺 Try again!";
                background.style.backgroundColor = "rgb(171, 68, 49)";
           }
        }

        //* logik für button disablen o. display none
        if (playButtons) {
            playButtons.style.pointerEvents = "none"; 
            playButtons.style.opacity = "0.4"; 
        }      

    }

};

//*5. reset FN 
// eventlistener
// alles auf null setzen
// variablen + html
const restartButton = document.querySelector("button");

restartButton?.addEventListener("click", restartGame);

function restartGame(){
    playerPoints = 0;
    computerPoints = 0;
    currentRound = 0;
    if (playButtons) {
        playButtons.style.pointerEvents = "auto"; 
        playButtons.style.opacity = "1"; 
    }
    if(outputPlayerScore){
        outputPlayerScore.innerHTML = "0"        
    }
    if(outputCompScore){
        outputCompScore.innerHTML = "0"        
    }
    if(counterDisplayNone){
        counterDisplayNone.style.visibility= "visible";
    }
    
    if(gameOutput){
        gameOutput.innerHTML = "Let's play"
   }
    if(chosenIconPlayer){
        chosenIconPlayer.innerHTML = "?"
   }
    if(chosenIconComputer){
        chosenIconComputer.innerHTML = "?"
   }

   if(outputRoundCounter){
        outputRoundCounter.style.visibility= "hidden";
    }
    if(background){
        background.style.backgroundColor = ""
    }
    
}

