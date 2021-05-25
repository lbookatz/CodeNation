

let scores = [0,0];
let roundScore = 0;
let activePlayer = 0;

dice = Math.floor(Math.random()*6)+1;
console.log("this is a dice number" + " "+ dice);

document.querySelector('.dice').style.display = 'none';

document.querySelector('#current-'+ activePlayer).textContent=dice;

var x = document.querySelector('#current-1').textContent;
console.log("this is a store variable"+ " "+ x);

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function () {
    
    
   let dice = Math.floor(Math.random() * 6) + 1;
   console.log(dice); 
    
    var img1 = document.getElementById('dice-1');
    var img2 = document.getElementById('dice-2');
    var img3 = document.getElementById('dice-3');
    var img4 = document.getElementById('dice-4');
    var img5 = document.getElementById('dice-5');
    var img6 = document.getElementById('dice-6');

    var imgArr = [img1,img2,img3,img4,img5,img6];
    console.log(img1);
    imgArr[0].style.display = "none";
    imgArr[1].style.display = "none";
    imgArr[2].style.display = "none";
    imgArr[3].style.display = "none";
    imgArr[4].style.display = "none";
    imgArr[5].style.display = "none";

    if(dice ==1 ){
       imgArr[0].style.display = "block";
    
    }

    else if(dice == 2){
  
      imgArr[1].style.display = "block";
      
    }

    else if(dice == 3){
   
      imgArr[2].style.display = "block";
     
    }

    else if(dice == 4){
     
      imgArr[3].style.display = "block";
    
    }

    else if(dice == 5){
 
      imgArr[4].style.display = "block";
     
    }

    else {
    

      imgArr[5].style.display = "block";


    }
    if(dice !== 1){
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;  
        

    }
    else {
        
document.querySelector('.dice').style.display = 'none';
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        console.log("next player!")
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

  
       

    }

   }
   

  
  );

  document.querySelector('.btn-hold').addEventListener('click', function () {
    // ADD current score to global score 
    scores[activePlayer] += roundScore;
    

    // update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    

    //check if player won the game 
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = " Winner!";
        document.querySelector('.dice').style.display = "none";
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        nextPlayer();
    }
});

function nextPlayer() {

    document.querySelector('.dice').style.display = 'none';
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

}


document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    gamePlaying = true;
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
