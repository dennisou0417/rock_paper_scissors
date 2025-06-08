function getComputerChoice(){
    let choice = Math.ceil(Math.random()*3);

    if(choice === 1){
        return console.log("Rock");
    }else if(choice === 2){
        return console.log("Paper");
    }else{
        return console.log("Scissors");
    }
}

getComputerChoice();

function getHumanChoice(){
    let choice = prompt("Rock Paper or Scissors");

    console.log(choice);

    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice){
    humanChoice = getHumanChoice().toLowerCase();
    console.log(humanChoice);
}

playRound();