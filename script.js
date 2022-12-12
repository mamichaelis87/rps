        
console.log("It's going down.");

// Get a choice from the computer
//  - initialize computerChoice variable
//  - randomly assign rock, paper, or scissors to computerChoice
function getComputerChoice() {
    let computerChoice = Math.random()
        console.log(computerChoice);
    if (computerChoice <= 1/3) {
        console.log("rock");
        return "rock";
    }
    else if (computerChoice <= 2/3) {
        console.log("paper");
        return "paper";
    }
    else {
        console.log("scissors");
        return "scissors";
    }
}

getComputerChoice();