let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rocks");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice(){
    const choices = ['rocks', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()* 3);
    // above function Math determins number 0 and 1
    // then the floor value makes it round down
    return choices[randomNumber];
}



function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = userChoice + " beats " + computerChoice + " You Win!!! ";
    
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = userChoice + " loses to " + computerChoice + " You Lost...";
}

function draw(userChoice, computerChoice){
    result_div.innerHTML = userChoice + " equals " + computerChoice + " its a  draw ";

}




function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rocksscissors":
        case "paperrocks":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "scissorsrocks":
        case "rockspaper":
        case "paperscissors":
            lose(userChoice, computerChoice);
            break;
        case "rocksrocks":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
   }
}


function main(){

rock_div.addEventListener('click', function(){
    console.log('this is rock')
    game('rocks')
})

paper_div.addEventListener('click', function(){
    console.log('this is paper')
    game('paper')
})

scissors_div.addEventListener('click', function(){
    console.log('this is scissors')
    game('scissors')
})

}

main();