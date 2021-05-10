function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

const changeImg = (num,id) => {
    let d = document.getElementById(`dice${id}`); 
    d.style.backgroundImage = `url(images/${num}.jpg)`; 
    
}


const roleDice = (player) => {
    let valueOfDice = 0
    for (let i = 0; i < 5;i++){
        valueOfDice = (Math.floor(Math.random() * 6 + 1));
        //wait(500)
        setInterval(changeImg(valueOfDice,player),1000);
        //setTimeout(function(){ alert("Hello"); }, 1000);
        console.log(valueOfDice)
    }
    return valueOfDice 
}


const winner =(num1,num2) =>{
    if (num1>num2){
        return "player 1";
    }
    else if (num1<num2){
        return "player 2";
    }
    else {
        return "a draw";
    }
}


const playGame = () => {
    let player1 = 0;
    let player2 = 0;

    let d = document.getElementById(`results`);

    player1 = roleDice(1);
    player2 = roleDice(2);

    let gameWinner = winner(player1,player2)

    d.innerHTML  += `Player 1 roled ${player1} : Player 2 roled ${player2} </br> the winner is ${gameWinner}</br>`;
    
    return gameWinner

}

const playGame10 = () => {

    let d = document.getElementById(`results`);
    let player1Total = 0;
    let player2Total = 0;

    d.innerHTML = ``;
    for (let i = 0; i < 10; i++){
        let result = playGame()

        if (result == "player 1"){player1Total++}
        if (result == "player 2"){player2Total++}
    }

    
    let gameWinner = winner(player1Total,player2Total)
    d.innerHTML  += `Player 1 won ${player1Total} games : Player 2 won ${player2Total} games </br> the overall winner is ${gameWinner}</br>`;

}