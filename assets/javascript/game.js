var random_result;
var lost = 0;
var win = 0;
var previous = 0;

$(".crystal").attr('class');

var resetAndStart = function () {

    $(".crystals").empty();

    random_result = Math.floor(Math.random() * 69 ) + 30;

    $("#result").html('Random Result: ' + random_result);

    for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 11) + 1;
    //console.log(random);

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        

    $(".crystals").append(crystal);

    }
}

    $("#previous").html("Total Score: " + previous);

resetAndStart();



$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total score: " + previous);

    console.log(previous);

    if(previous > random_result){

        lost++;

        $("#lost").html("You lost: " + lost);

        previous = 0;

        resetAndStart();
    }
    else if (previous === random_result){

        win++;

        $("#win").html("You win: " + win);

        previous = 0;

        resetAndStart();

    }

});



$(document).ready(function(){
    var score, goalNumber;
    var wins = 0;
    var losses = 0;
    
    
    
    $('.gems').on("click", function(){
        score += parseInt($(this).val());
        $("#score").html(score);
    
        if(score == goalNumber){
            alert("You Win!");
            wins++;
            resetGame();
        }
        if(score > goalNumber){
            alert("You Lose! Haha");
            losses++;
            resetGame();
        }
    });
    
    if(score == goalNumber){
        alert("You Win!");
        wins++;
        resetGame();
    }
    if(score > goalNumber){
        alert("You Lose! Haha");
        losses++;
        resetGame();
    }
    
    
    function resetGame(){
        score = 0;
        goalNumber = Math.floor((Math.random() * 15) + 40);
        $("#RedGem").val(Math.floor((Math.random() * 7) + 3));
        $("#BlackGem").val(Math.floor((Math.random() * 7) + 3));
        $("#YellowGem").val(Math.floor((Math.random() * 7) + 3));
        $("#GreenGem").val(Math.floor((Math.random() * 7) + 3));
        $("#goal").html(goalNumber);
        $("#score").html(score);
        $("#wins").html(wins);
        $("#losses").html(losses);
    }
    });
