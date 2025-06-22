const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");

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

function getHumanChoice(option){
    //let entry = prompt("Rock Paper or Scissor");

    console.log(option);

    let choice = option;

    /*if(!(choice === "Rock" || choice === "Paper" || choice === "Scissor")){
        console.log("Not an option. Try Again");
        entry = prompt("Rock Paper or Scissor");
        choice = option.toLowerCase();
    }*/

    return choice;
}

/*function playGame(){

    let humanScore = 0;
    let computerScore = 0;*/

    function playRound(computerChoice, humanChoice){

        humanChoice = getHumanChoice(humanChoice);

        console.log(humanChoice + " " + computerChoice);
    
        if(humanChoice === "scissor" && computerChoice === "paper"){
            /*humanScore += 1;
            console.log("You Win! Scissor cut paper");
            console.log("Score: YOU: " + humanScore + " AI: " + computerScore);*/
            const div = document.querySelector(".content");
            const para = document.createElement("p");
            
            para.textContent = "You Win! Scissor cuts paper";

            div.appendChild(para);
            
        }else if(humanChoice === "paper" && computerChoice === "rock"){
            /*humanScore += 1;
            console.log("You Win! Paper beats rock");
            console.log("Score: YOU: " + humanScore + " AI: " + computerScore);*/
            const div = document.querySelector(".content");
            const para = document.createElement("p");
            
            para.textContent = "You Win! Paper beats rock";

            div.appendChild(para);
        }else if(humanChoice === "rock" && computerChoice ==="scissor"){
            /*humanScore += 1;
            console.log("You Win! Rock smashes scissor");
            console.log("Score: YOU: " + humanScore + " AI: " + computerScore);*/
            const div = document.querySelector(".content");
            const para = document.createElement("p");
            
            para.textContent = "You Win! Rock smashes scissor";

            div.appendChild(para);
        }else if(humanChoice === computerChoice){
            console.log("Play Again");
            playRound(getComputerChoice(), getHumanChoice);
        }else{
            /*computerScore += 1;
            console.log("You Lose, " + computerChoice + " beats " + humanChoice);
            console.log("Score: YOU: " + humanScore + " AI: " + computerScore);*/

            const div = document.querySelector(".content");
            const para = document.createElement("p");
            
            para.textContent = "You Lose, " + computerChoice + " beats " + humanChoice;

            div.appendChild(para);
        }
    }

    //Temporarily removing 5 rounds to implement UI.

    /*for(let i = 1; i <= 5; i++){
        console.log("Round " + i);
        playRound(getComputerChoice(), getHumanChoice);
    }

    if(humanScore > computerScore){
        console.log("YOU WIN!");
    }else{
        console.log("YOU LOSE!");
    }*/
//}

// playGame();

rockBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), rockBtn.textContent)
});
paperBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), paperBtn.textContent)
});
scissorBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), scissorBtn.textContent)
});