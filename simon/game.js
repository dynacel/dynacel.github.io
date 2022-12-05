var buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var level = 0
var started = false;

function animatePress(inputColor) {
    $("#" + inputColor).animate({ opacity: 0 }, 100).animate({ opacity: 1 }, 100);
}

function playSound(inputColor) {
    const colorSound = new Audio("./sounds/" + inputColor + ".mp3");
    colorSound.play();
}

$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    $.each(gamePattern, function (indexInArray, valueOfElement) {
        animatePress(userChosenColor);
        playSound(userChosenColor);
    });


    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
    userClickedPattern.length = 0
    level = (gamePattern.length) + 1
    $("h1").text("Level " + level)
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    animatePress(randomChosenColor)
    playSound(randomChosenColor)

    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        console.log("Success")
        console.log("Level " + currentLevel + " Clicks " + userClickedPattern.length)

        if (userClickedPattern.length === gamePattern.length) {

            setTimeout(function () {
                nextSequence();
            }, 1000
            )
        }
    } else {
        console.log("Fail")
        const wrongSound = new Audio("./sounds/wrong.mp3");
        wrongSound.play();
        console.log("Level " + currentLevel + " Clicks " + userClickedPattern.length)
        gamePattern.length = 0;
    }


}