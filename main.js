function getPlayerChoice() {
    let playerChoice = document.querySelectorAll('#items button');
    if (playerChoice) {
        playerChoice.forEach(function(choice){
            choice.addEventListener('click', function(){
                let result = document.querySelector('#result');
                // result.textContent = userChoice;
                let userChoice = choice.id;
                if ( 
                    userChoice === 'rock' ||
                    userChoice === 'paper' ||
                    userChoice === 'scissors'
                  ) {
                    console.log(userChoice)
                    playGame(userChoice);
                } else {
                    alert("Please enter a valid prompt");
                    return getPlayerChoice();
                }
            });
        });
    } else {
      alert("I guess you changed your mind :(");
      return null;
    }
  }
  
  function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice === 1 ? "rock" : computerChoice === 2 ? "scissors" : "paper";
  }
  
  function getGameResult(userChoice, computer) {
    let result = document.querySelector('#result');
    let playerScore = document.querySelector('#player-score');
    let compScore = document.querySelector('#comp-score');
    let scoreBoard = [playerScore, compScore];
    if (userChoice === computer) {
      result.textContent = "Game Tie";
    } else if (
      (userChoice === "rock" && computer === "scissors") ||
      (userChoice === "scissors" && computer === "paper") ||
      (userChoice === "paper" && computer === "rock")
    ) {
        result.textContent = `PlayerOne: ${userChoice}, computer: ${computer}, \nPlayer wins!`;
        scoreBoard[0].textContent = parseInt(scoreBoard[0].textContent) + 1;

    } else {
      result.textContent = `PlayerOne: ${userChoice}, computer: ${computer}, \nComputer wins!`;
      scoreBoard[1].textContent = parseInt(scoreBoard[1].textContent) + 1;
    }
  }
  
  function playGame(userChoice) {
    if (playGame) {
        let computerChoice = getComputerChoice();
        let getResult = getGameResult(userChoice, computerChoice);
        let playAgain = confirm('Play Again?');
        playAgain ? location.reload() : alert("Thank you for playing :)");
      }
  }

function gameScore(){
    let playerScore = document.createElement('p');
    let compScore = document.createElement('p');
    playerScore.setAttribute('id', 'player-score')
    compScore.setAttribute('id', 'comp-score')
    let scoreBoard = [];
    scoreBoard[0] = document.createTextNode("Player: ");
    scoreBoard.push(playerScore);
    scoreBoard[1] = document.createTextNode(" Computer: ");
    scoreBoard.push(compScore);
    document.querySelector('#score').innerHTML = '';
    scoreBoard.forEach(function(score){
      document.querySelector('#score').appendChild(score);
    });
    playerScore.textContent += 0;
    compScore.textContent += 0;

};
  
  // let playRPS = confirm('Do you want to play Rock, Paper Scissors?');
  let playRPS = document.querySelector('#choice-form');
  let userChoiceInput = document.querySelector('#user-choice');
  playRPS.addEventListener('submit', function(event) {
    event.preventDefault();
    let userConsent = userChoiceInput.value.toLowerCase();
    if(userConsent === 'yes'){
      alert('Pick Rock Paper or Scissors');
      gameScore();
      playGame(userChoice);
    } else if(userConsent === 'no'){
      alert('Okay! See you next time.');
    } else{
      alert("Please enter a valid prompt");
      userChoiceInput.value = '';
    };
  });

  function resetForm(){
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++){
      inputs[i].value = '';
    }
  };

  playRPS ? getPlayerChoice() : console.log("Thank you for playing :)");

