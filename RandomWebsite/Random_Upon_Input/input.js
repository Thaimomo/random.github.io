console.clear();

var randomInputs = [];
var finalAns = [];
var optionInput;
var inputClear;
var inputList = document.getElementById("input-list");
var final = document.getElementById("final-option");

function addToList(optionInput) {
  optionInput = document.getElementById("inputs").value;
  inputClear = document.getElementById("inputs").value = "";

   if (randomInputs.length >= 10) {
    alert("No more than 10");
  } else if (optionInput !== "") {
    randomInputs.push("<br>" + optionInput);
    inputList.innerHTML = randomInputs.join("");
    final.innerHTML = ""
  } else {
    console.log("Input value");
  }
}

function clear() {
  randomInputs.pop();
  finalAns = []
}

function clearAndDisplay() {
  clear();
  inputList.innerHTML = randomInputs.join("");
  final.innerHTML = ""
}

var arrLength;
var arrStart = 1;
var randomNumber;



function randomOption() {
  
  arrLength = randomInputs.length - 1;
  
  randomNumber = Math.floor(Math.random() * (Number(arrLength) - 0 + 1) + 0);
  var inputNums = randomInputs[randomNumber];

  if (randomInputs == "") {
    final.innerHTML = "Input options";
  } else {
    finalAns.unshift("<br>" + inputNums)
    final.innerHTML = finalAns.join("");
  }
  
  if (finalAns.length >= 5) {
    finalAns.pop()
  }
}


inputs.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("apply-input").click();
  }
});