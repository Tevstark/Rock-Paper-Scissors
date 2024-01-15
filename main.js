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
                    return userChoice
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
    if (userChoice === computer) {
      return "Game Tie";
    } else if (
      (userChoice === "rock" && computer === "scissors") ||
      (userChoice === "scissors" && computer === "paper") ||
      (userChoice === "paper" && computer === "rock")
    ) {
        let result = document.querySelector('#result');
        result.textContent = `PlayerOne: ${userChoice}, computer: ${computer}, \nPlayer wins!`;

    } else {
      return `PlayerOne: ${userChoice}, computer: ${computer}, \nComputer wins!`;
    }
  }
  
  function playGame() {
    if (playGame) {
      let playerOne = getPlayerChoice();
      if (playerOne) {
        let computer = getComputerChoice();
        let result = getGameResult(userChoice, computer);
        alert(result);
        let playAgain = confirm('Play Again?');
        playAgain ? location.reload() : alert("Thank you for playing :)");
      }
    } else {
      alert("Maybe next time.");
    }
  }

function gameScore(){
    let playerScore = document.createElement('int');
    let compScore = document.createElement('p');
    playerScore.setAttribute('id', 'player-score')
    compScore.setAttribute('id', 'comp-score')
    let scoreBoard = [];
    scoreBoard[0] = document.createTextNode("Player: ");
    scoreBoard.push(playerScore);
    scoreBoard[1] = document.createTextNode(" Computer: ");
    scoreBoard.push(compScore);
    scoreBoard.appendChild(playerScore);
    scoreBoard.appendChild(compScore);
    
};
  
  let playRPS = confirm('Do you want to play Rock, Paper Scissors?');
  playRPS ? playGame() : console.log("Thank you for playing :)");

