$(document).ready(function () {

    //Set up the initiation function
    init();

    function init() {

        $("#messageOutput").text("");

        //GLOBAL VARIABLES =============================

        //Set up a variable for the villain's power lever
        var smithPower = Math.floor(Math.random() * 100 + 1);
        console.log(smithPower);

        //Add the villain's power level to the screen
        $("#smith-power").text(smithPower);

        //Set the variables for the heros power
        var neo = Math.floor(Math.random() * 10 + 1);
        var trinity = Math.floor(Math.random() * 10 + 2);
        var morpheus = Math.floor(Math.random() * 10 + 1);

        $("#neo").attr("data-val", neo);
        $("#trinity").attr("data-val", trinity);
        $("#morpheus").attr("data-val", morpheus);

        var counter = 0;
        //var score = 0;

        //PLAY GAME ==================================

        //On click, heros power levels will increase
        $(".hero-image").on("click", function () {

            //Set a variable for the hero's power level
            var heroPower = $(this).attr("data-val");
            counter += parseInt(heroPower);
            console.log(counter);

            //Here we have the conditions for the fight and how to win the game
            if (counter < smithPower) {
                $("#messageOutput").text(counter);
            } else if (counter === smithPower) {
                //counter = counter + 1;
                $("#messageOutput").text("You Win!");
                //$("#battlesWon").text(counter);
            } else {
                $("#messageOutput").text("You Loose!");
            }


            //SCORE ====================================

            //Tried to add a score counter, but couldn't figure out how to make it work at all. I'm not even sure it goes here or if I should take it out of the PLAY GAME area?

            // if (counter === smithPower) {
            //      score = score + 1;
            //$("#battlesWon").text(counter); 
            // } else {
            //      score = score;
            // }

        });

    }

    //RESET ====================================

    //Here we use the "Reset" button to restart the game
    $("#button-clear").on("click", function () {
        init();
    });

});