let playerScore = 0;
let computerScore = 0;

function computerPlay() {
	let randNum = Math.random();
	console.log(randNum);
	if (randNum>0.666) {
		return "Scissors";
	} else if (randNum>0.333) {
		return "Paper";
	} else {
		return "Rock";
	}
}

function playerPlay() {
	let playerInput = window.prompt("Enter your choice... Rock, Paper or Scissors?");
	let playerChoice = playerInput.slice(0,1).toUpperCase() + playerInput.slice(1).toLowerCase();
	console.log(playerChoice);
	if (playerChoice === 'Rock' || playerChoice === 'Paper' || playerChoice === 'Scissors') {
		return playerChoice;
	} else {
		alert('A valid choice needs to be made!');
		playerPlay();
	}
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return 'Draw!';
	} else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
		computerScore++;
		return 'You lose! Paper beats Rock.';
	} else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
		playerScore++;
		return 'You win! Rock beats Scissors.';
	} else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
		playerScore++;
		return 'You win! Paper beats Rock.';
	} else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
		computerScore++;
		return 'You lose! Scissors beat Paper.';
	} else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
		computerScore++;
		return 'You lose! Rock beats Scissors.';
	} else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
		playerScore++;
		return 'You win! Scissors beat Paper.';
	} 
}

// console.log(computerPlay());

function game() {
	for (var i = 0; i < 5; i++) {
		console.log(playRound(playerPlay(), computerPlay()));
	}
	if (playerScore === computerScore) {
		console.log("It's a tie!");
	} else if (playerScore > computerScore) {
		console.log("Congratulations, you've won!");
	} else {
		console.log("Commiserations, you've lost!");
	}
}

game();

