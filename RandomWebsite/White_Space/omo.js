console.clear()

var randomNumber;
var minNum;
var maxNum;
var text = [];
var introText = document.getElementById("intro");
var textLength 

var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var textSteps= rootStyles.getPropertyValue('--text-steps');


//sets timeout for intro text to run through intro 3 seconds apart, and then erase
setTimeout(function() {
  setTimeout(function() {
    setTimeout(function() {
      setTimeout(function() {
  textClear()
}, 3000);
  welcome()
}, 3000);
  textClear()
}, 3000);
  textIntro()
}, 3000);
  

//function to redisplay intro text as it changes
function textArray() {
introText.innerHTML = text
}

//clears intro text in order to get pause of blank text between intro text
function textClear() {
  text.pop();
  textArray();
}


//finds length of intro text as it changes (would like to work for all text)
//and adds to textSteps to make animation responsive
function textLength() {
  textLength = text.map(w => w.length)
  textSteps = textLength
}
//needs below code in element for animation to adapt with said element

// textLength();
// root.style.setProperty('--text-steps', textSteps);
// root.style.setProperty('--animation-delay', '1000ms');




function redoClass() {
  introText.classList.remove("typeText");
  void introText.offsetWidth;
  introText.classList.add("typeText");
}


function textIntro() {
  text.pop();
  text.push(["WELCOME \xa0 TO \xa0 WHITE \xa0 SPACE."]);
  textArray();
}


function welcome() {
  text.pop();
  text.push("YOU \xa0 HAVE \xa0 BEEN \xa0 LIVING \xa0 HERE \xa0 FOR<br>AS \xa0 LONG \xa0 AS \xa0 YOU \xa0 CAN \xa0 REMEMBER.");
  textArray();
  
} 

window.onkeypress = function (event) {
	if (event.which === 32) {
		event.preventDefault();
    redoClass();
	}}




//unused script

    //adds event listener to element and reapplies typeText class for animation replay

// function redo(){
// introText.addEventListener("click", function(event){
//   event.preventDefault;
//   introText.classList.remove("typeText");

//   void introText.offsetWidth;

//   introText.classList.add("typeText")
// }, false)}



    //generates random number

//randomNumber = Math.floor(Math.random() * (Number(maxNum) - Number(minNum) + 1)) + Number(minNum);