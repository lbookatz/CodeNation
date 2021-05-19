let score = 0
let valueScoreToWin = document.getElementById("scoreToWin").textContent;
// console.log(valueScoreToWin)


document.getElementById("rollDice").addEventListener("click", rollDice);

function rollDice() {
    //get a random number between 1 and 6
    let valueOfDice = (Math.floor(Math.random() * 6 + 1));
    console.log(valueScoreToWin)

    document.getElementById("dice").src = `../images/${valueOfDice}.jpg`;

    if (score >= valueScoreToWin || valueOfDice == 1){
        //game ends
        document.getElementById("startAgain").style.visibility = "visible";    
        document.getElementById("rollDice").style.visibility = "hidden";
        if (score >= valueScoreToWin ){
            document.getElementById("playerWinLoose").innerHTML = "**Winner**";
        }
        else {
            document.getElementById("playerWinLoose").innerHTML = "You Lost!";
        }
    }
    else{
        //increase score by one
        score ++; 
        console.log(score);
        document.getElementById("score").innerHTML = score;
    }
}

document.getElementById("scoreToWin").contentEditable = "true";



document.getElementById("scoreToWin").addEventListener("keyup", scoreToWin);

function scoreToWin() {
    num = document.getElementById("scoreToWin").textContent;
    if (isNaN(num)){
        document.getElementById("notInt").innerHTML = "This is not a number (the score needed to win will not change until a valid number is entered)";
    }
    else{ 
        document.getElementById("notInt").innerHTML = "";
        valueScoreToWin = document.getElementById("scoreToWin").textContent;
    }
// update valueScoreToWin to value entered
}

document.getElementById("startAgain").addEventListener("click", startAgain);

function startAgain () {
    document.getElementById("startAgain").style.visibility = "hidden";    
    document.getElementById("rollDice").style.visibility = "visible";    
    document.getElementById("score").innerHTML = 0;
    score = 0;
    document.getElementById("playerWinLoose").innerHTML = "Player 1";

    
}

