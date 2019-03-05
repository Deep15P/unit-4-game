$(document).ready(function () {
    // random number between 19 - 120
    var randomNumber = Math.floor(Math.random() * 109) + 12;

    // these are all the crystal that are generating random numbers. 
    // They are also console logged to make sure its working properly/forcing 
    // it to log something. Just in case nothing logs.
    console.log(randomNumber)
    var blue = Math.floor(Math.random() * 15 + 1);
    console.log(blue);
    var green = Math.floor(Math.random() * 15 + 1);
    console.log(green);
    var red = Math.floor(Math.random() * 15 + 1);
    console.log(red);
    var yellow = Math.floor(Math.random() * 15 + 1);
    console.log(yellow);

    // these are variables for the user guess, wins, and losses.
    var userGuess = 0;
    var wins = 0;
    var losses = 0;


    // this is linking the JavaScript variables back to HTML using the id's 
    // declared in the HTML tags.
    $("#computerChoice").text(randomNumber);
    $("#Wins").text(wins);
    $("#Losses").text(losses);
    $("#userGuess").text(userGuess);

    // this is reseting the game once an outcome is reached. 
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


    // this is the on click function with if, and else if statements. 
    $("#blueCrystal").on("click", function () {
        // once you click on the colored crystal the users guess should 
        // increase depending on the random number that was created by the 
        // blue variable. This is also selecting the number. 
        userGuess = userGuess + blue;
        // This is printing the number in HTML
        $("#userGuess").text(userGuess);

        // if the user guess number is the same as the random number 
        // then its a win, and the game resets.
        if (userGuess === randomNumber) {
            wins++;
            reset();
        }
        // else if the userGuess is greater/higher than the random number 
        // generated then its a loss, and the game resets.
        else if (userGuess > randomNumber) {
            losses++;
            reset();
        }

    });

    $("#greenCrystal").on("click", function () {
        userGuess = userGuess + green;
        $("#userGuess").text(userGuess);
        // if the user guess number is the same as the random number 
        // then its a win, and the game resets.
        if (userGuess === randomNumber) {
            wins++;
            reset();
        }
        // else if the userGuess is greater/higher than the random number 
        // generated then its a loss, and the game resets.
        else if (userGuess > randomNumber) {
            losses++;
            reset();
        }

    });


    $("#redCrystal").on("click", function () {
        userGuess = userGuess + red;
        $("#userGuess").text(userGuess);
        // if the user guess number is the same as the random number 
        // then its a win, and the game resets.
        if (userGuess === randomNumber) {
            wins++;
            reset();
        }
        // else if the userGuess is greater/higher than the random number 
        // generated then its a loss, and the game resets.
        else if (userGuess > randomNumber) {
            losses++;
            reset();
        }

    });

    $("#yellowCrystal").on("click", function () {
        userGuess = userGuess + yellow;
        $("#userGuess").text(userGuess);
        // if the user guess number is the same as the random number 
        // then its a win, and the game resets.
        if (userGuess === randomNumber) {
            wins++;
            reset();
        }
        // else if the userGuess is greater/higher than the random number 
        // generated then its a loss, and the game resets.
        else if (userGuess > randomNumber) {
            losses++;
            reset();
        }

    });

})

