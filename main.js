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