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
	while (!userChoice) {
		userChoice = prompt(
			"Please select rock, paper, or scissors."
		).toLowerCase();
		// if (
		// 	userChoice != "rock" ||
		// 	userChoice != "paper" ||
		// 	userChoice != "scissors"
		// ) {
		// 	userChoice = false;
		// }
	}

	return userChoice;
}

function playRound(playerSelection, computerSelection, playerScore, cpuScore) {
	switch ((playerSelection, computerSelection)) {
		case playerSelection === "rock" && computerSelection === "scissors":
			return ["Rock beats scissors! You win!", ++playerScore];
		case playerSelection === "paper" && computerSelection === "rock":
			return ["Paper beats rock! You win!", ++playerScore];
		case playerSelection === "Scissors" && computerSelection === "paper":
			return ["Scissors beats paper! You win!", ++playerScore];
		case playerSelection === computerSelection:
			return ["You and the CPU made the same choice"];
		default:
			return ["The CPU beat you.", ++cpuScore];
	}
}

function game(rounds = 5) {
	let userPoints = 0;
	let cpuPoints = 0;
	let cpu;
	let user;

	for (let i = 0; i < rounds; i++) {
		cpu = computerPlay();
		user = userPlay();
		console.log(playRound(user, cpu, userPoints, cpuPoints)[0]);
		userPoints = playRound(user, cpu, userPoints, cpuPoints)[1];
		cpuPoints = playRound(user, cpu, userPoints, cpuPoints)[1];
        // The points are going to both opponenets. fix this next
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
