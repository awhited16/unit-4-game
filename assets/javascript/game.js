$(document).ready(function() {

    // list of starting number of wins and losses
    var wins = 0;
    var losses = 0;

    // set inititial variables for score and random number
    var score = 0;
    var randomNumber = Math.floor(Math.random()*(120 - 19 + 1) + 19);

    //generate random numbers for crystals
    var redNumber = Math.floor(Math.random()*(12 - 1 + 1) + 1);
    var blueNumber = Math.floor(Math.random()*(12 - 1 + 1) + 1);
    var yellowNumber = Math.floor(Math.random()*(12 - 1 + 1) + 1);
    var greenNumber = Math.floor(Math.random()*(12 - 1 + 1) + 1);

    function runGame () {

        // display variables
        $(".wins").html("<p>Wins: " + wins + "</p><br>");
        $(".losses").html("<p>Losses: " + losses + "</p>");
        $(".random").html("<h1>" + randomNumber + "</h1>");
        $(".score").html("<h1>" + score + "<h1>");

        // add random number to green box and console log
        console.log(randomNumber);
        $("random").html("<h1>" + randomNumber) + "</h1>";

        // console log crystal values
        console.log(redNumber);
        console.log(blueNumber);
        console.log(yellowNumber);
        console.log(greenNumber);

        // add number on click
        $("#red").unbind("click").click(function() {
            score = score + redNumber;
            $(".score").html("<h1>" + score + "<h1>");
            check ();
            console.log("randomNumber: " + randomNumber);
            console.log("score: " + score);
        });

        $("#blue").unbind("click").click(function() {
            score = score + blueNumber;
            $(".score").html("<h1>" + score + "<h1>");
            check ();
            console.log("randomNumber: " + randomNumber);
            console.log("score: " + score);
        });

        $("#yellow").unbind("click").click(function() {
            score = score + yellowNumber;
            $(".score").html("<h1>" + score + "<h1>");
            check ();
            console.log("randomNumber: " + randomNumber);
            console.log("score: " + score);
        });

        $("#green").unbind("click").click(function() {
            score = score + greenNumber;
            $(".score").html("<h1>" + score + "<h1>");
            check ();
            console.log("randomNumber: " + randomNumber);
            console.log("score: " + score);
        });


        function check () {
            if (score === randomNumber) {
                $(".message").html("<p>You won!!</p><br>");
                wins++;
                score = 0;
                randomNumber = Math.floor(Math.random()*(120 - 19 + 1) + 19);
                redNumber = Math.floor(Math.random()*(12 - 1 + 1) + 1);
                blueNumber = Math.floor(Math.random()*(12 - 1 + 1) + 1);
                yellowNumber = Math.floor(Math.random()*(12 - 1 + 1) + 1);
                greenNumber = Math.floor(Math.random()*(12 - 1 + 1) + 1);
                runGame ();
            }
            
            if (score > randomNumber) {
                $(".message").html("<p>You lost!!</p><br>");
                losses++;
                score = 0;
                randomNumber = Math.floor(Math.random()*(120 - 19 + 1) + 19);
                redNumber = Math.floor(Math.random()*(12 - 1 + 1) + 1);
                blueNumber = Math.floor(Math.random()*(12 - 1 + 1) + 1);
                yellowNumber = Math.floor(Math.random()*(12 - 1 + 1) + 1);
                greenNumber = Math.floor(Math.random()*(12 - 1 + 1) + 1);
                runGame ();
            }
            
        }
    
    }

    runGame ()

});