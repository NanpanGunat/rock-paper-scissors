/**
 * Rock paper scissors
 * rules
 * Rock beats scissors, scissors beat paper, and paper beats rock.
 * 1.Get guess from computer either rock, paper or scissors and must be random.
 * 2.Get guess from user either rock paper or scissors
 * 3.compare guesses
 *
 */

let computerScore = 0;
let playerScore = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerGuess() {
  const guess = Math.floor(Math.random() * 3);
  return choices[guess];
}

function getPlayerSelection() {
  const guess = prompt("Rock, paper,or scissors ");
  return guess.toLowerCase();
}

function playRound(computerSelection, playerSelection) {
  const computer = computerSelection();
  const player = playerSelection();

  console.log("***" + computer, player + "***");

  if (computer === player) {
    computerScore++;
    playerScore++;
    return "it's a draw";
  }
  ////////////
  if (computer === "rock" && player === "scissors") {
    computerScore++;
    return "you lose,rock beats scissors";
  } else if (computer === "scissors" && player === "rock") {
    playerScore++;
    return "you win,rock beats scissors";
  }
  /////////////
  if (computer === "scissors" && player === "paper") {
    computerScore++;
    return "you lose,scissors beats paper";
  } else if (computer === "paper" && player === "scissors") {
    playerScore++;
    return "you win,scissors beats paper";
  }
  /////////////
  if (computer === "paper" && player === "rock") {
    computerScore++;
    return "you lose,paper beats rock";
  } else if (computer === "rock" && player === "paper") {
    playerScore++;
    return "you win,paper beats rock";
  }

  return "invalid input";
}

// function game() {
//   for (let index = 1; index <= 5; index++) {
//     console.log(playRound(getComputerGuess, getPlayerSelection));
//   }

//   const winner = computerScore > playerScore ? "computer won" : "You won";
//   return winner;
// }

// console.log(game());

/**rps ui*/
const btn_container = document.querySelector(".btn_container");

function printChoice(e) {
  console.log(e.target.className);
}

function createBtn(className) {
  const btn = document.createElement("button");
  btn.classList.add(className);
  btn.textContent = className;

  btn.addEventListener("click", printChoice);
  return btn;
}

choices.forEach((e) => {
  btn_container.appendChild(createBtn(e));
});
