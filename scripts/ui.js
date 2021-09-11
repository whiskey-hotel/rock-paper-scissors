const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", function () {
	console.log(playRound("rock", computerPlay()));
});
paper.addEventListener("click", function () {
	console.log(playRound("paper", computerPlay()));
});
scissors.addEventListener("click", function () {
	console.log(playRound("scissors", computerPlay()));
});
