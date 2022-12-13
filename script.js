        
console.log("It's going down.");

// Get a choice from the computer
//  - initialize commputerSelection variable
//  - randomly assign rock, paper, or scissors to commputerSelection

let playerScore = 0;
let computerScore = 0;
let tally;
let playerSelection;
let computerSelection;

function getComputerChoice() {
    let commputerChoice = Math.random()
        
    if (commputerChoice <= 1/3) {
        console.log("rock");
        return "rock";
    }
    else if (commputerChoice <= 2/3) {
        console.log("paper");
        return "paper";
    }
    else {
        console.log("scissors");
        return "scissors";
    }
}


// Get a selection from the player
//Get a selection from the computer
//compare player selection and computer choice
//if player selects rock 
//      when computer has rock return tie
//      when computer has paper return lose
//      when computer has scissors return win
//if player selects paper
//      when computer has rock return win
//      when computer has paper return tie
//      when computer has scissors return lose
//if player selects scissors
//      when computer has rock return lose
//      when computer has paper return win
//      when computer has scissors return tie

function playRound(playerSelection, computerSelection) {
   
    playerSelection = prompt("Choose your weapon carefully. (rock, paper, or scissors)");
    console.log("player chose " + playerSelection);
    computerSelection = getComputerChoice();
    console.log("Computer chose " + computerSelection);

   if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "rock") {
            console.log("You butt heads with another rock and agree to disagree, get ready for another round.");
            return "T";
        }
        else if (computerSelection === "paper") {
            console.log("The horizon darkens. Slowly the light is cut off further and further up the sky until all is black. You have been covered by paper.");
            return "L";
        }
        else {
            console.log("You stand over the remains of your adversary, scissors has been crushed by your might.");
            return "W";
        }}

    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            console.log("You have engulfed your foe in an inescapable cage, rock will never see the light of day again.");
            return "W";
        }
        else if (computerSelection === "paper") {
            console.log("Just two pieces of paper. It is very anticlimactic.");
            return "T";
        }
        else {
            console.log("The pain! The pain!!! Scissors chops and slices you until tiny fragments of your once promising life are all that remain.");
            return "L";
        } }
    
    else {
        if (computerSelection === "rock") {
            console.log("BANG!! Before you know what hit you, you are broken in two. You will never sciss again.");
            return "L";
        }
        else if (computerSelection === "paper") {
            console.log("Ahhhh the cathartic feeling of blade slicing with ease. Paper never stood a chance.");
            return "W";
        }
        else {
            console.log("What is this? Another scissors? Suddenly you realize that fighting is all you've ever known, and maybe there is more out there.  The other scissors approaches you, seemingly having similar thougths. 'I'm Sci,' you say, unsure why.  'I'm Ssors,' they reply.  You notice Ssors has a beauty you've never witnessed before, and another peculiar quality that can only be described as a pleasant aura. You decide to take a risk and propose to Ssors.  Ssors blushes and looks down, before looking back up to catch your gaze.  'Yes,' says Ssors with a jubilant smile. 'Yes, Yes, a million times YES!'. Shocked and in awe at the unexpected development in your life, you choose to stop fighting, at least for the day.");
            return "T";
        }}
}

//Run the playRound funtion
//determine a winner
//add score to a tally for either player or computer
//once either player or comp reach 5 wins, end the game

function game() {

for (let i = 0; i < 5; i++) {
    
    tally = playRound(playerSelection,computerSelection);

    if (tally === "W") {
        playerScore++;
        console.log(`You have ${playerScore} points, and your rival has ${computerScore}`);
    }
    else if (tally === "L"){
        computerScore++;
        console.log(`You have ${playerScore} points, and your rival has ${computerScore}`)
    }
    else {
        console.log(`You have ${playerScore} points, and your rival has ${computerScore}`)
    }
    }

    if (playerScore > computerScore) {console.log("You have won the war.  One day you'll tell your grandkids. Woo.")}
    else if (playerScore < computerScore) {console.log("....you're dead. Have fun with that.")}
    else { console.log("Truly a battle for the ages.  You have met your match. Like Gilgamesh and Enkidu, you and computer will now become friends and fight your battles as allies, not foes.")}

}

game();