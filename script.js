function getComputerChoice(){
    let choice = Math.ceil(Math.random()*3);

    console.log(choice);

    return choice;
}

getComputerChoice();

function getHumanChoice(){
    let choice = prompt("Rock Paper or Scissors");

    console.log(choice);

    return choice;
}

getHumanChoice();

let humanScore = 0;
let computerScore = 0;

