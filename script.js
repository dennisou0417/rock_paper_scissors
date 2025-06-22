const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");
const div = document.querySelector(".content");
const para = document.createElement("p");

let humanScore = 0;
let computerScore = 0;
let round = 1;

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
    console.log(option);

    let choice = option;

    return choice;
}

function playRound(computerChoice, choice){

    let humanChoice = getHumanChoice(choice);

    console.log(humanChoice + " " + computerChoice);

    if(humanChoice === "Scissor" && computerChoice === "Paper"){
        humanScore += 1;
        /*console.log("You Win! Scissor cut paper");
        console.log("Score: YOU: " + humanScore + " AI: " + computerScore);*/
        
        para.textContent = "You Win! Scissor cuts paper";

        div.appendChild(para);
        round++;
        
    }else if(humanChoice === "Paper" && computerChoice === "Rock"){
        humanScore += 1;
        /*console.log("You Win! Paper beats rock");
        console.log("Score: YOU: " + humanScore + " AI: " + computerScore);*/
        para.textContent = "You Win! Paper beats rock";

        div.appendChild(para);
        round++;
    }else if(humanChoice === "Rock" && computerChoice ==="Scissor"){
        humanScore += 1;
        /*console.log("You Win! Rock smashes scissor");
        console.log("Score: YOU: " + humanScore + " AI: " + computerScore);*/
        para.textContent = "You Win! Rock smashes scissor";

        div.appendChild(para);
        round++;
    }else if(humanChoice === computerChoice){
        //console.log("Play Again");
        //playRound(getComputerChoice(), getHumanChoice);
        para.textContent = "Go Again";

        div.appendChild(para);
    }else{
        computerScore += 1;
        /*console.log("You Lose, " + computerChoice + " beats " + humanChoice);
        console.log("Score: YOU: " + humanScore + " AI: " + computerScore);*/
        para.textContent = "You Lose, " + computerChoice + " beats " + humanChoice;

        div.appendChild(para);
        round++;
    }
}

function playGame(choice){
    playRound(getComputerChoice(), choice);

    let h1 = document.createElement("h1");
    
    //Temporarily removing 5 rounds to implement UI.

    /*for(let i = 1; i <= 5; i++){
        console.log("Round " + i);
        //playRound(getComputerChoice(), choice);
    }*/

    if(round > 5){
        if(humanScore > computerScore){
            h1.textContent = "YOU WIN!";
            div.prepend(h1);
        }else{
            h1.textContent = "YOU LOSE!";
            div.prepend(h1);
        }
    }   
}

// playGame();

rockBtn.addEventListener("click", () => {
    if(round <= 5 ){
        //playRound(getComputerChoice(), choice);
        playGame(rockBtn.textContent);
    }

    if(round > 5){
        para.textContent = "GAME OVER";
        div.appendChild(para);
    }
});
paperBtn.addEventListener("click", () => {
    if(round <= 5 ){
        //playRound(getComputerChoice(), choice);
        playGame(rockBtn.textContent);
    }
    
    if(round > 5){
        para.textContent = "GAME OVER";
        div.appendChild(para);
    }
});
scissorBtn.addEventListener("click", () => {
    if(round <= 5 ){
        //playRound(getComputerChoice(), choice);
        playGame(rockBtn.textContent);
    }
    
    if(round > 5){
        para.textContent = "GAME OVER";
        div.appendChild(para);
    }
});