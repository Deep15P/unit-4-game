$(document).ready(function() {
    // random number between 19 - 120
var randomNumber = Math.floor(Math.random() * 109) + 12;


console.log(randomNumber)
var blue = Math.floor(Math.random() * 15 + 1);
console.log(blue);
var green = Math.floor(Math.random() * 15 + 1);
console.log(green);
var red = Math.floor(Math.random() * 15 + 1); 
console.log(red);
var yellow = Math.floor(Math.random() * 15 + 1) ;
console.log(yellow);


var userGuess = 0;
var wins = 0;
var losses = 0;

// $("#TotalScore").text(totalScore)

$("#computerChoice").text(randomNumber);
$("#Wins").text(wins);
$("#Losses").text(losses);
$("#userGuess").text(userGuess);

function reset() {
    randomNumber = Math.floor(Math.random() * 109) + 15 + 1;
    blue = Math.floor(Math.random() * 15 + 1);
    green = Math.floor(Math.random() * 15 + 1);
    red = Math.floor(Math.random() * 15 + 1); 
    yellow = Math.floor(Math.random() * 15 + 1);
    $("#computerChoice").text(randomNumber);
    userGuess = 0;
    $("#userGuess").text(userGuess);
    $("#Wins").text(wins);
    $("#Losses").text(losses);
}


// function wins() {
//     wins++;
// }

// function loss() {
//     losses++;
// }


$("#blueCrystal").on("click", function() {
userGuess = userGuess + blue;
$("#userGuess").text(userGuess);

if (userGuess === randomNumber) {
    wins++;
    reset();
}

else if (userGuess > randomNumber) {
    losses++;
    reset();
}

});

$("#greenCrystal").on("click", function() {
userGuess = userGuess + green;
$("#userGuess").text(userGuess);

if (userGuess === randomNumber) {
    wins++;
    reset();
}

else if (userGuess > randomNumber) {
    losses++;
    reset();
}

});


$("#redCrystal").on("click", function() {
userGuess = userGuess + red;
$("#userGuess").text(userGuess);

if (userGuess === randomNumber) {
    wins++;
    reset();
}

else if (userGuess > randomNumber) {
    losses++;
    reset();
}

});

$("#yellowCrystal").on("click", function() {
userGuess = userGuess + yellow;
$("#userGuess").text(userGuess);

if (userGuess === randomNumber) {
    wins++;
    reset();
}

else if (userGuess > randomNumber) {
    losses++;
    reset();
}

});

}) 

