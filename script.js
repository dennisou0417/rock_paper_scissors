function getComputerChoice(){
    let choice = Math.ceil(Math.random()*3);

    console.log(choice);

    return choice;
}

getComputerChoice();