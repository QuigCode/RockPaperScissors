let playerScore = 0;
let computerScore = 0;
const colourPrim1 = '#FE2BF1';
const colourPrim2 = '#00DFBA';
const colourPrim3 = '#0C7CEB';

const outcome = document.querySelector('#feedback');
const playerScoreText = document.querySelector('#playerScore');
const computerScoreText = document.querySelector('#computerScore');
const gameContainer = document.querySelector('#btnContainer');
const chooseText = document.querySelector('h2');
const btnPlayAgain = document.querySelector('.btnPlayAgain');
btnPlayAgain.addEventListener('click', resetGame());

const btns = document.querySelectorAll('.btnIcon');
console.log(btns);
btns.forEach(btn => btn.addEventListener('click', () => playRound(btn.classList.value.slice(15), computerPlay())));

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

function playRound(playerSelection, computerSelection) {
	if (playerScore+1 === 5) {
		playerScore++;
		playerScoreText.innerHTML = playerScore;
		outcome.innerText = "Congrats, you've won the game!";
		btns.forEach(btn => btn.setAttribute('disabled', ''));
		btns.forEach(btn => btn.style.removeProperty('transition'));
		gameContainer.style.opacity='50%';
		gameContainer.classList.add("noHover");
		chooseText.style.opacity='50%';
		btnPlayAgain.style.visibility = 'visible';

	} else if (computerScore+1 === 5) {
		computerScore++;
		computerScoreText.innerHTML = computerScore;
		outcome.innerText = "Too bad, you've lost the game :(";
		btns.forEach(btn => btn.setAttribute('disabled', ''));
		btns.forEach(btn => btn.style.removeProperty('transition'));
		gameContainer.style.opacity='50%';
		gameContainer.classList.add("noHover");
		chooseText.style.opacity='50%';
		btnPlayAgain.style.visibility = 'visible';

	} else if (playerSelection === computerSelection) {
		console.log('Draw');
		outcome.innerText = "A Draw. How boring.";
		outcome.style.color = colourPrim3;
		return 'Draw!';

	} else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
		computerScore++;
		computerScoreText.innerHTML = computerScore;
		console.log('You lose! Paper beats Rock.');
		outcome.innerText = "You lose! Paper beats Rock.";
		outcome.style.color = colourPrim1;
		return 'You lose! Paper beats Rock.';

	} else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
		playerScore++;
		playerScoreText.innerHTML = playerScore;
		console.log('You win! Rock beats Scissors.');
		outcome.innerText = "You win! Rock beats Scissors.";
		outcome.style.color = colourPrim2;
		return 'You win! Rock beats Scissors.';

	} else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
		playerScore++;
		playerScoreText.innerHTML = playerScore;
		console.log('You win! Paper beats Rock.');
		outcome.innerText = "You win! Paper beats Rock.";
		outcome.style.color = colourPrim2;
		return 'You win! Paper beats Rock.';

	} else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
		computerScore++;
		computerScoreText.innerHTML = computerScore;
		console.log('You lose! Scissors beat Paper.');
		outcome.innerText = "You lose! Scissors beat Paper.";
		outcome.style.color = colourPrim1;
		return 'You lose! Scissors beat Paper.';

	} else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
		computerScore++;
		computerScoreText.innerHTML = computerScore;
		console.log('You lose! Rock beats Scissors.');
		outcome.innerText = "You lose! Rock beats Scissors.";
		outcome.style.color = colourPrim1;
		return 'You lose! Rock beats Scissors.';

	} else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
		playerScore++;
		playerScoreText.innerHTML = playerScore;
		console.log('You win! Scissors beat Paper.');
		outcome.innerText = "You win! Scissors beat Paper.";
		outcome.style.color = colourPrim2;
		return 'You win! Scissors beat Paper.';
	} 
}

function resetGame() {
  btnPlayAgain.addEventListener('click', () => {
    window.location.reload();
  });
}

