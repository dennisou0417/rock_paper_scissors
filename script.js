const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");
const div = document.querySelector(".content");
const para = document.createElement("p");
const h2 = document.createElement("h2");
const playAgain = document.createElement("button");

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
    let choice = option;

    return choice;
}

function playRound(computerChoice, choice){
    let humanChoice = getHumanChoice(choice);

    if(humanChoice === "Scissor" && computerChoice === "Paper"){
        humanScore += 1;
        h2.textContent = "You Win! Scissor cuts paper";
        para.textContent = "You: " + humanScore + " AI: " + computerScore;

        div.append(h2,para);
        round++;
        
    }else if(humanChoice === "Paper" && computerChoice === "Rock"){
        humanScore += 1;
        h2.textContent = "You Win! Paper beats rock";
        para.textContent = "You: " + humanScore + " AI: " + computerScore;

        div.append(h2,para);
        round++;
    }else if(humanChoice === "Rock" && computerChoice ==="Scissor"){
        humanScore += 1;
        h2.textContent = "You Win! Rock smashes Scissor";
        para.textContent = "You: " + humanScore + " AI: " + computerScore;

        div.append(h2,para);
        round++;
    }else if(humanChoice === computerChoice){
        para.textContent = "Go Again";

        div.appendChild(para);
    }else{
        computerScore += 1;
        h2.textContent = "You Lose, " + computerChoice + " beats " + humanChoice;
        para.textContent = "You: " + humanScore + " AI: " + computerScore;

        div.append(h2, para);
        round++;
    }
}

function playGame(choice){
    playRound(getComputerChoice(), choice);

    let h1 = document.createElement("h1");

    if(round > 5){
        if(humanScore > computerScore){
            h1.textContent = "YOU WIN!";
            div.prepend(h1);
            
        }else{
            h1.textContent = "YOU LOSE!";
            div.prepend(h1);
        }
        playAgain.textContent = "PLAY AGAIN";
        div.appendChild(playAgain);
        playAgain.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            round = 1;
            playAgain.remove();
            h1.remove();
            h2.remove();
            para.remove();
        });
    }
}

rockBtn.addEventListener("click", () => {
    if(round <= 5 ){
        playGame(rockBtn.textContent);
    }

    if(round > 5){
        h2.textContent = "GAME OVER";
        div.insertBefore(h2, para);
    }
});
paperBtn.addEventListener("click", () => {
    if(round <= 5 ){
        playGame(rockBtn.textContent);
    }
    
    if(round > 5){
        h2.textContent = "GAME OVER";
        div.insertBefore(h2, para);
    }
});
scissorBtn.addEventListener("click", () => {
    if(round <= 5 ){
        playGame(rockBtn.textContent);
    }
    
    if(round > 5){
        h2.textContent = "GAME OVER";
        div.insertBefore(h2, para);
    }
});