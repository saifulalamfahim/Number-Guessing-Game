let computerGuessNumber;
let userGuess = [];
let audio = new Audio("./audio/esm_5_wickets_sound_fx_arcade_casino_kids_mobile_app.mp3");


const init = () => {
    computerGuessNumber = Math.floor(Math.random() * 100);
    document.getElementById("newgameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
}


const  startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

const newGameBegin = () => {
    window.location.reload();
}


const startNewGame = () => {
    document.getElementById("newgameButton").style.display = "block";
    audio.play();
}

const compareGuess = () => {
    const userNumber = document.getElementById("inputBox").value;
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;
    audio.play();

   if( maxGuess > userGuess.length) {

    if( userNumber < computerGuessNumber ) {
        document.getElementById("textOutput").innerHTML = "Your guess is Low";
        audio.play();
    } else if( userNumber > computerGuessNumber ) {
        document.getElementById("textOutput").innerHTML = "Your guess is High";
        audio.play();
    } else {
        document.getElementById("textOutput").innerHTML = "It's Correct";
        startNewGame();
        audio.play();
    }

   } else{
    
    if( userNumber < computerGuessNumber ) {
        document.getElementById("textOutput").innerHTML = `You Loose!! correct number was ${computerGuessNumber}`;
        startNewGame();
        audio.play();
    } else if( userNumber > computerGuessNumber ) {
        document.getElementById("textOutput").innerHTML = `You Loose!! correct number was ${computerGuessNumber}`;
        startNewGame();
        audio.play();
    } else {
        document.getElementById("textOutput").innerHTML = "It's Correct";
        startNewGame();
        audio.play();
    } audio.play();
   }

    document.getElementById("attempts").innerHTML = userGuess.length;

}

const easyMode = ()  => {
        startGame();
        audio.play();
        maxGuess = 10;
}
const midMode = ()  => {
        startGame();
        audio.play();
        maxGuess = 5;
}
const hardMode = ()  => {
        startGame();
        audio.play();
        maxGuess = 1;
}