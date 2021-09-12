const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resultResponse = document.querySelector("#results");
const userScore = document.querySelector("#userScore");
const cpuScore = document.querySelector("#cpuScore");
const gameOver = document.querySelector("#gameOver");
let userPoints = 0;
let cpuPoints = 0;
let maxPoints = 5;

function computerPlay() {
	let cpuChoice = Math.floor(Math.random() * 3);
	switch (cpuChoice) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
	}
}

function playRound(playerSelection, computerSelection) {
	switch (true) {
		case playerSelection === "rock" && computerSelection === "scissors":
			return ["Rock beats scissors! You win!", 0];
		case playerSelection === "paper" && computerSelection === "rock":
			return ["Paper beats rock! You win!", 0];
		case playerSelection === "scissors" && computerSelection === "paper":
			return ["Scissors beats paper! You win!", 0];
		case playerSelection === computerSelection:
			return ["You and the CPU made the same choice. Go again!", 1];
		default:
			return ["The CPU beat you.", 2];
	}
}

function score(result, userPoints, cpuPoints) {
	if (result === 0) {
		++userPoints;
		userScore.textContent = `User Score: ${userPoints}`;
	} else if (result === 2) {
		++cpuPoints;
		cpuScore.textContent = `CPU Score: ${cpuPoints}`;
	}
	return [userPoints, cpuPoints];
}

function update(userSelection) {
	let selection = playRound(userSelection, computerPlay());
	resultResponse.textContent = selection[0];
	let scoreUpdate = score(selection[1], userPoints, cpuPoints);
	userPoints = scoreUpdate[0];
	cpuPoints = scoreUpdate[1];

	if (userPoints == maxPoints) {
		gameOver.textContent = `Congratualations! You beat the Computer ${userPoints} to ${cpuPoints}!`;
		userPoints = 0;
		cpuPoints = 0;
		userScore.textContent = `User Score: ${userPoints}`;
		cpuScore.textContent = `CPU Score: ${cpuPoints}`;
	} else if (cpuPoints == maxPoints) {
		gameOver.textContent = `You loss to the Computer. ${cpuPoints} to ${userPoints}.`;
		userPoints = 0;
		cpuPoints = 0;
		userScore.textContent = `User Score: ${userPoints}`;
		cpuScore.textContent = `CPU Score: ${cpuPoints}`;
	}
}

rock.addEventListener("click", function () {
	update("rock");
});
paper.addEventListener("click", function () {
	update("paper");
});
scissors.addEventListener("click", function () {
	update("scissors");
});

// console.log(update("rock"));
// console.log(update("scissors"));
// console.log(update("paper"));
