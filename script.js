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

function userPlay() {
	let userChoice;
	let chk = false;
	do {
		userChoice = prompt("Please select rock, paper, or scissors.");

		if (userChoice === null) {
			return userChoice;
		}

		userChoice = userChoice.toLowerCase();

		if (
			userChoice === "rock" ||
			userChoice === "paper" ||
			userChoice === "scissors"
		) {
			chk = true;
		}
	} while (chk === false);

	return userChoice;
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

function game(rounds = 5) {
	let userPoints = 0;
	let cpuPoints = 0;
	let cpu;
	let user;
	let chk;

	for (let i = 0; i < rounds; i++) {
		cpu = computerPlay();
		user = userPlay();
		if (user === null) {
			return "Game canceled. Play again soon!";
		}
		chk = playRound(user, cpu);
		console.log(chk[0]);
		if (chk[1] === 0) {
			++userPoints;
		} else if (chk[1] === 2) {
			++cpuPoints;
		} else if (chk[1] === 1) {
			--i;
		}
	}

	if (userPoints > cpuPoints) {
		return `Congratualations! You beat the Computer ${userPoints} to ${cpuPoints}!`;
	} else if (userPoints < cpuPoints) {
		return `You lose to the Computer. ${cpuPoints} to ${userPoints}.`;
	} else {
		return `You and the computer tied. ${cpuPoints} to ${userPoints}. `;
	}
}

console.log(game());
