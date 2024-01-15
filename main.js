// console.log();

let playGame = confirm('Do you want to play Rock, Paper Scissors?');
function rockPaperScissors(){
    if (playGame) {
        let playerChoice = prompt("Rock, Paper, Scissors? ");
        if (playerChoice) {
            let playerOne = playerChoice.trim().toLowerCase();
            if (
                playerOne === "rock" ||
                playerOne === "paper" ||
                playerOne === "scissors"
            ) {
                console.log("Rock, Paper, Scissors")
                let computerChoice = Math.floor(Math.random() * 3) + 1;
                let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "scissors" : "paper";
                let result =
                    playerOne === computer
                        ? "Game Tie"
                        : playerOne === "rock" && computer === "scissors"
                            ? `PlayerOne: ${playerOne}, computer: ${computer}, \nPlayer wins!`
                            : playerOne === "scissors" && computer === "paper"
                                ? `PlayerOne: ${playerOne}, computer: ${computer}, \nComputer wins!`
                                : playerOne === "paper" && computer === "rock"
                                    ? `PlayerOne: ${playerOne}, computer: ${computer}, \nPlayer wins!`
                                    : `PlayerOne: ${playerOne}, computer: ${computer}, \nComputer wins!`
                alert(result);
                let playAgain = confirm('Play Again?');
                playAgain ? location.reload(rockPaperScissors()) : alert("Thank you for playing :)")
            } else{
                alert("Please enter a valid prompt");
            }
        } else {
            alert("I guess you changed your mind :(")
        }
    } else {
        alert("Maybe next time.")
    }
};


rockPaperScissors();

// function getPlayerChoice() {
//     let playerChoice = prompt("Rock, Paper, Scissors? ");
//     if (playerChoice) {
//       let playerOne = playerChoice.trim().toLowerCase();
//       if (
//         playerOne === "rock" ||
//         playerOne === "paper" ||
//         playerOne === "scissors"
//       ) {
//         return playerOne;
//       } else {
//         alert("Please enter a valid prompt");
//         return getPlayerChoice();
//       }
//     } else {
//       alert("I guess you changed your mind :(");
//       return null;
//     }
//   }
  
//   function getComputerChoice() {
//     let computerChoice = Math.floor(Math.random() * 3) + 1;
//     return computerChoice === 1 ? "rock" : computerChoice === 2 ? "scissors" : "paper";
//   }
  
//   function getGameResult(playerOne, computer) {
//     if (playerOne === computer) {
//       return "Game Tie";
//     } else if (
//       (playerOne === "rock" && computer === "scissors") ||
//       (playerOne === "scissors" && computer === "paper") ||
//       (playerOne === "paper" && computer === "rock")
//     ) {
//       return `PlayerOne: ${playerOne}, computer: ${computer}, \nPlayer wins!`;
//     } else {
//       return `PlayerOne: ${playerOne}, computer: ${computer}, \nComputer wins!`;
//     }
//   }
  
//   function playGame() {
//     if (playGame) {
//       let playerOne = getPlayerChoice();
//       if (playerOne) {
//         let computer = getComputerChoice();
//         let result = getGameResult(playerOne, computer);
//         alert(result);
//         let playAgain = confirm('Play Again?');
//         playAgain ? location.reload() : alert("Thank you for playing :)");
//       }
//     } else {
//       alert("Maybe next time.");
//     }
//   }
  
//   let playGame = confirm('Do you want to play Rock, Paper Scissors?');
//   playGame ? playGame() : alert("Thank you for playing :)");

