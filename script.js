function getComputerChoice(){
    let choice = Math.ceil(Math.random()*3);

    if(choice === 1){
        return "Rock";
    }else if(choice === 2){
        return "Paper";
    }else{
        return "Scissor";
    }
}

function getHumanChoice(){
    let choice = prompt("Rock Paper or Scissor");

    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice){
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    console.log(humanChoice + " " + computerChoice);
    
    if(humanChoice === "scissor" && computerChoice === "paper"){
        humanScore += 1;
        console.log("You Win! Scissor cut paper");
        console.log("Score: YOU: " + humanScore + " AI: " + computerScore);
    }else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore += 1;
        console.log("You Win! Paper beats rock");
        console.log("Score: YOU: " + humanScore + " AI: " + computerScore);
    }else if(humanChoice === "rock" && computerChoice ==="scissor"){
        humanScore += 1;
        console.log("You Win! Rock smashes scissor");
        console.log("Score: YOU: " + humanScore + " AI: " + computerScore);
    }else if(humanChoice === computerChoice){
        console.log("Play Again");
        playRound(getComputerChoice(), getHumanChoice);
    }else{
        computerScore += 1;
        console.log("You Lose, " + computerChoice + " beats " + humanChoice);
        console.log("Score: YOU: " + humanScore + " AI: " + computerScore);
    }
}

playRound(getComputerChoice(), getHumanChoice);