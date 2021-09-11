const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");

rock.addEventListener("click", function () {
	results.textContent = playRound("rock", computerPlay())[0];
});
paper.addEventListener("click", function () {
	results.textContent = playRound("paper", computerPlay())[0];
});
scissors.addEventListener("click", function () {
	results.textContent = playRound("scissors", computerPlay())[0];
});
