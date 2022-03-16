console.clear();

var randomNumber;
var minNum;
var maxNum;
var inputClear;
var inputReplace;
var answer = document.getElementById("answer");

function callRandNum() {
	inputClear = document.getElementById("guess").value = "";
	minNum = document.getElementById("min").value;
	maxNum = document.getElementById("max").value;

	randomNumber = Math.floor(Math.random() * (Number(maxNum) - Number(minNum) + 1)) + Number(minNum);
	rightOrWrong();
}

//calls function on startup
callRandNum();

function rightOrWrong() {
	var input = document.getElementById("guess").value;
	
	//inputReplace = (document.getElementById("guess").placeholder = input);
	inputClear = document.getElementById("guess").value = "";
	
	console.clear()
	console.log(randomNumber)
	
 
	if (input == "") {
		answer.innerHTML = "Enter a number";
		return "Enter a number";
	} else if (input > Number(maxNum) || input < Number(minNum)) {
		answer.innerHTML = "Guess a number between " + minNum + " and " + maxNum;
	} else if (input == randomNumber) {
		answer.innerHTML = "Got it! - " + randomNumber;
		return "Got it";
	} else if (input < randomNumber) {
		answer.innerHTML = "Too Low";
		return "Too low";
	} else if (input > randomNumber) {
		answer.innerHTML = "Too High";
		return "Too high";
	}
	
}

guess.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("enter").click();
	}
});

console.log("No Cheating little boy");
