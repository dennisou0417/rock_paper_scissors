function getComputerChoice(){
    let choice = Math.ceil(Math.random()*3);

    if(choice === 1){
        return "rock";
    }else if(choice === 2){
        return "paper";
    }else{
        return "scissor";
    }
}

function getHumanChoice(){
    let entry = prompt("Rock Paper or Scissor");

    let choice = entry.toLowerCase();

    if(!(choice === "rock" || choice === "paper" || choice === "scissor")){
        console.log("Not an option. Try Again");
        entry = prompt("Rock Paper or Scissor");
        choice = entry.toLowerCase();
    }

    return choice;
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(computerChoice, humanChoice){

        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

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

    for(let i = 1; i <= 5; i++){
        console.log("Round " + i);
        playRound(getComputerChoice(), getHumanChoice);
    }

    if(humanScore > computerScore){
        console.log("YOU WIN!");
    }else{
        console.log("YOU LOSE!");
    }
}

playGame();