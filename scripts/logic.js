const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const bestOf3 = document.querySelector("#bestOf3");
const bestOf5 = document.querySelector("#bestOf5");
const bestOf7 = document.querySelector("#bestOf7");

let userPoints = 0;
let cpuPoints = 0;
let maxPoints;

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
		userPointsDisplay.textContent = `${userPoints}`;
	} else if (result === 2) {
		++cpuPoints;
		cpuPointsDisplay.textContent = `${cpuPoints}`;
	}
	return [userPoints, cpuPoints];
}

function update(userSelection) {
	let selection = playRound(userSelection, computerPlay());
	let scoreUpdate = score(selection[1], userPoints, cpuPoints);
	resultResponse.textContent = selection[0];
	userPoints = scoreUpdate[0];
	cpuPoints = scoreUpdate[1];

	if (userPoints == maxPoints) {
		resetBoard(
			`Congratulations! You beat the Computer ${userPoints} to ${cpuPoints}!`
		);
	} else if (cpuPoints == maxPoints) {
		resetBoard(`You loss to the Computer. ${cpuPoints} to ${userPoints}.`);
	}
}

function setGameBoard(max) {
	const rock = document.createElement("button");
	rock.id = "rock";
	rock.classList.add("userSelection");
	rock.textContent = "Rock";

	const paper = document.createElement("button");
	paper.id = "paper";
	paper.classList.add("userSelection");
	paper.textContent = "Paper";

	const scissors = document.createElement("button");
	scissors.id = "scissors";
	scissors.classList.add("userSelection");
	scissors.textContent = "Scissors";

	const scoreBoard = document.createElement("div");
	scoreBoard.id = "scoreBoard";	

	const userScore = document.createElement("div");
	userScore.id = "userScore";
	userScore.textContent = `User Score:`;

	const userPointsDisplay = document.createElement("div");
	userPointsDisplay.id = "userPointsDisplay";
	userPointsDisplay.classList.add("pointsDisplay");
	userPoints = 0;
	userPointsDisplay.textContent = `${userPoints}`;

	const cpuScore = document.createElement("div");
	cpuScore.id = "cpuScore";
	cpuScore.textContent = `CPU Score:`;

	const cpuPointsDisplay = document.createElement("div");
	cpuPointsDisplay.id = "cpuPointsDisplay";
	cpuPointsDisplay.classList.add("pointsDisplay");
	cpuPoints = 0;
	cpuPointsDisplay.textContent = `${cpuPoints}`;

	const resultResponse = document.createElement("div");
	resultResponse.id = "resultResponse";

	h2.textContent = "";
	h3.textContent = "";
	container.removeChild(bestOf3);
	container.removeChild(bestOf5);
	container.removeChild(bestOf7);

	container.appendChild(scoreBoard);
	scoreBoard.appendChild(userScore);
	userScore.appendChild(userPointsDisplay);
	scoreBoard.appendChild(cpuScore);
	cpuScore.appendChild(cpuPointsDisplay);
	container.appendChild(resultResponse);
	container.appendChild(rock);
	container.appendChild(paper);
	container.appendChild(scissors);

	maxPoints = max;
	rock.addEventListener("click", function () {
		update("rock");
	});
	paper.addEventListener("click", function () {
		update("paper");
	});
	scissors.addEventListener("click", function () {
		update("scissors");
	});
}

function resetBoard(gameOverText) {
	h2.textContent = gameOverText;
	h3.textContent = "Play Again!";

	container.removeChild(scoreBoard);
	container.removeChild(resultResponse);
	container.removeChild(rock);
	container.removeChild(paper);
	container.removeChild(scissors);

	container.appendChild(bestOf3);
	container.appendChild(bestOf5);
	container.appendChild(bestOf7);
}

if (!!document.getElementById("bestOf3")) {
	bestOf3.addEventListener("click", function () {
		setGameBoard(2);
	});

	bestOf5.addEventListener("click", function () {
		setGameBoard(3);
	});

	bestOf7.addEventListener("click", function () {
		setGameBoard(4);
	});
}
