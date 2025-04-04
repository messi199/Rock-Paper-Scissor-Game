const buttons= document.querySelectorAll('button');

const resultE= document.getElementById("result");
const playerScoreE=document.getElementById("user-score");
const computerScoreE=document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;


buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const result=PlayRound(button.classList[0], computerPlay());
        console.log(result);
        resultE.textContent=result;
    })
});

function computerPlay(){
    const choices= ["rock", "paper", "scissors"];
    const randomChoice= Math.floor(Math.random()*choices.length);
    return choices[randomChoice];

}
function PlayRound(playerSelection, computerSelection){
    if(playerSelection===computerSelection){
        return "It's a tie!"; 
    }
    else if(
        (playerSelection==="rock" && computerSelection==="scissors")||
        (playerSelection==="paper" && computerSelection==="rock")||
        (playerSelection==="scissors" && computerSelection==="paper")
    ){
        playerScore++;
        playerScoreE.textContent=playerScore;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else{
        computerScore++;
        computerScoreE.textContent=computerScore;
       return "You lose! " + computerSelection + " beats " + playerSelection;
    }

}