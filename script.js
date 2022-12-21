        
console.log("It's going down.");

let playerScore = 0;
let computerScore = 0;
let tally;
let playerSelection;
let computerSelection;
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const results = document.querySelector(".results");
const gameScore = document.querySelector(".gameScore");
const endGame = document.querySelector(".endGame");

rockBtn.addEventListener('click', () => {
    tally = playRound('rock', computerSelection);
    if (tally === "W") {playerScore++;}
    else if (tally === "L") {computerScore++}
    gameScore.textContent = `You have ${playerScore} points, and your rival has ${computerScore}.`;
    checkForWinner();
    });

paperBtn.addEventListener('click', () => {
    tally = playRound('paper', computerSelection)
    if (tally === "W") {playerScore++}
    else if (tally === "L") {computerScore++}
    gameScore.textContent = `You have ${playerScore} points, and your rival has ${computerScore}.`;
    checkForWinner();
});

scissorsBtn.addEventListener('click', () => {
    tally = playRound('scissors', computerSelection)
    if (tally === "W") {playerScore++}
    else if (tally === "L") {computerScore++}
    gameScore.textContent = `You have ${playerScore} points, and your rival has ${computerScore}.`;
    checkForWinner();
});

function checkForWinner() {
if(playerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    endGame.textContent = "You have won the war.  One day you'll tell your grandkids. Woo. (choose a weapon to fight another computer)";
}
else if (computerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    endGame.textContent = "....you're dead. Have fun with that. (choose a weapon to fight in another life)";
}
else {endGame.textContent = null}}

function getComputerChoice() {
    let commputerChoice = Math.random()
        
    if (commputerChoice <= 1/3) {
        //console.log("rock");
        return "rock";
    }
    else if (commputerChoice <= 2/3) {
        //console.log("paper");
        return "paper";
    }
    else {
        //console.log("scissors");
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
   
   
    computerSelection = getComputerChoice();
    

   if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "rock") {
            results.textContent="You butt heads with another rock and agree to disagree, get ready for another round.";
            return "T";
        }
        else if (computerSelection === "paper") {
            results.textContent="The horizon darkens. Slowly the light is cut off further and further up the sky until all is black. You have been covered by paper.";
            return "L";
        }
        else {
            results.textContent="You stand over the remains of your adversary, scissors has been crushed by your might.";
            return "W";
        }}

    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            results.textContent="You have engulfed your foe in an inescapable cage, rock will never see the light of day again.";
            return "W";
        }
        else if (computerSelection === "paper") {
            results.textContent="Just two pieces of paper. It is very anticlimactic.";
            return "T";
        }
        else {
            results.textContent="The pain! The pain!!! Scissors chops and slices you until tiny fragments of your once promising life are all that remain.";
            return "L";
        } }
    
    else {
        if (computerSelection === "rock") {
            results.textContent="BANG!! Before you know what hit you, you are broken in two. You will never sciss again.";
            return "L";
        }
        else if (computerSelection === "paper") {
            results.textContent="Ahhhh the cathartic feeling of blade slicing with ease. Paper never stood a chance.";
            return "W";
        }
        else {
            results.textContent="What is this? Another scissors? Suddenly you realize that fighting is all you've ever known, and maybe there is more out there.  The other scissors approaches you, seemingly having similar thougths. 'I'm Sci,' you say, unsure why.  'I'm Ssors,' they reply.  You notice Ssors has a beauty you've never witnessed before, and another peculiar quality that can only be described as a pleasant aura. You decide to take a risk and propose to Ssors.  Ssors blushes and looks down, before looking back up to catch your gaze.  'Yes,' says Ssors with a jubilant smile. 'Yes, Yes, a million times YES!'. Shocked and in awe at the unexpected development in your life, you choose to stop fighting, at least for the day.";
            return "T";
        }}}
