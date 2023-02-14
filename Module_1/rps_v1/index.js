// const options = ["rock", "paper", "scissors"];
// const select = () => {
//   return options[Math.floor(Math.random() * options.length)];
// };
// const play = (a, b) => {
//   if (a === b) {
//     console.log("It's a draw! Play again");
//   } else if (
//     (a === "rock" && b === "paper") ||
//     (a === "scissors" && b === "rock") ||
//     (a === "paper" && b === "scissors")
//   ) {
//     console.log("The Computer won!");
//   } else {
//     console.log("The Player won!");
//   }
// };
// const playerSelection = select();
// const computerSelection = select();
// // console.log(`Player : ${playerSelection}`);
// // console.log(`Computer : ${computerSelection}`);
// play(playerSelection, computerSelection);


// Rock Paper Scissors (my try with teacher)

const choices =[ 'rock', 'paper', 'scissors'];
const randomNum = Math.floor(Math.random() * 3);
const computerChoice = choices[randomNum];

let userChoice = "";
let isNotValid = true;

while(isNotValid) {
    userChoice = prompt("PLease cheese rock, paper, or scissors")
    userChoice = userChoice.trim().toLowerCase();

    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
    isNotValid = false; 
   }
}

console.log(`User Choice: ${userChoice}) || Computer Choice: ${computerChoice}`);

if (userChoice === computerChoice) {
    console.log("Its a tie!");
} else if (userChoice === 'rock' && computerChoice === 'scissors') {
    console.log("You score!");
} else if (userChoice === "paper" && computerChoice === "rock") {
    console.log("You score!");
} else if (userChoice === "scissors" && computerChoice === "paper") {
    console.log("You score!");
} else {
    console.log("Computer score!");
}

// my try

// if (computerChoice === computerChoice) {
//     console.log('Its a draw!')
// } else if (
//     (userChoice === 'rock' && computerChoice === 'paper')
//     (userChoice === 'scissors' && computerChoice === 'rock')
//     (userChoice === 'paper' && computerChoice === 'scissors')
// ){ 
//     console.log("Computer won!")
// } else {
// console.log("User Won!")
// }