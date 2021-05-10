let blank = " ";
let linespaces[s = "     |   |   ";
let lineDashes = "  -----------";
let lineletters = `   a   b   c `;
let spaces[s = [" "," "," "," "," "," "," "," "," "];
console.log(spaces[s.length);
let line1 = `1  ${spaces[s[0]} | ${spaces[[1]} | ${spaces[[2]} `;
let line2 = `2  ${spaces[[3]} | ${spaces[[4]} | ${spaces[[5]} `;
let line3 = `3  ${spaces[[6]} | ${spaces[[7]} | ${spaces[[8]} `;
let lineMiddle = linespaces[s + "\n" + lineDashes + "\n" + linespaces[s;
let row = 1;
let column = "a";
let whoseGo = "x";

const changeTurn = (turn) => {
  if (turn == "x"){
    return "o"
  }
  else {
    return "x"
  }
}

const printGrid = () => {
line1 = `1  ${spaces[s[0]} | ${spaces[[1]} | ${spaces[[2]} `;
line2 = `2  ${spaces[[3]} | ${spaces[[4]} | ${spaces[[5]} `;
line3 = `3  ${spaces[[6]} | ${spaces[[7]} | ${spaces[[8]} `;
  console.log(lineletters + "\n" +linespaces[s + "\n" + line1 + "\n" + lineMiddle+ "\n" + line2+ "\n" +lineMiddle + "\n" +line3  + "\n" + linespaces[s);
}

const checkMove = (spaces[x) =>{
  if (spaces[x == "x" || spaces[x == "o") {
    console.log(`Someone has already gone here, try again.`);
    return false;
  }
  else{
    return true;
  }
}

const checkRC = (num,letter) =>{
  if((num == "1" || num =="2" || num =="3") &&(letter == "a"||letter == "b"||letter == "c")){
    return true
  }
  else{
    return false
  }
}

//const placeMove = (spaces[) =>{
// if (checkMove(spaces[)){
 //   spaces[ = whoseGo;
////  }
 // else{
 //   takeGo(whoseGo);
 //  addMove(row,column,whoseGo);
 // }
//}

const addMove = (num,letter) =>{
  if(checkRC(num,letter)){
  switch(letter){
    case "a":
      switch(num){
        case "1":
          if (checkMove(spaces[1)){
             spaces[1 = whoseGo;
          }
          else{
            takeGo(whoseGo);
            addMove(row,column,whoseGo);
          }
          break;
        case "2":
          if (checkMove(spaces[4)){
             spaces[4 = whoseGo;
          }
          else{
            takeGo(whoseGo);
            addMove(row,column,whoseGo);
          }
          break;
        case "3":
          if (checkMove(spaces[7)){
             spaces[7 = whoseGo;
          }
          else{
            takeGo(whoseGo);
            addMove(row,column,whoseGo);
          }
        break;
      }
    break;

    
    case "b":
      switch(num){
        case "1":
          if (checkMove(spaces[2)){
             spaces[2 = whoseGo;
          }
          else{
            takeGo(whoseGo);
            addMove(row,column,whoseGo);
          }
          break;
        case "2":
          if (checkMove(spaces[5)){
             spaces[5 = whoseGo;
          }
          else{
            takeGo(whoseGo);
            addMove(row,column,whoseGo);
          }
          break;
        case "3":
          if (checkMove(spaces[8)){
             spaces[8 = whoseGo;
          }
          else{
            takeGo(whoseGo);
            addMove(row,column,whoseGo);
          }
        break;
      }
    break;

    
    case "c":
      switch(num){
        case "1":
          if (checkMove(spaces[3)){
             spaces[3 = whoseGo;
          }
          else{
            takeGo(whoseGo);
            addMove(row,column,whoseGo);
          }
          break;
        case "2":
          if (checkMove(spaces[6)){
             spaces[6 = whoseGo;
          }
          else{
            takeGo(whoseGo);
            addMove(row,column,whoseGo);
          }
          break;
        case "3":
          if (checkMove(spaces[9)){
             spaces[9 = whoseGo;
          }
          else{
            takeGo(whoseGo);
            addMove(row,column,whoseGo);
          }
        break;
      }
    break;

    default:
    break;

  }
  }
  else{
    console.log(`this is not a valid entry, please try again`);
     takeGo(whoseGo);
     addMove(row,column,whoseGo);
  }
}

const checkIfWin =(xo) =>{
  if ((spaces[0] == xo && spaces[1] == xo && spaces[2] == xo)
    ||(spaces[3] == xo && spaces[4] == xo && spaces[5] == xo)
    ||(spaces[6] == xo && spaces[7] == xo && spaces[8] == xo)
    ||(spaces[0] == xo && spaces[3] == xo && spaces[6] == xo)
    ||(spaces[1] == xo && spaces[4] == xo && spaces[7] == xo)
    ||(spaces[2] == xo && spaces[5] == xo && spaces[8] == xo)
    ||(spaces[0] == xo && spaces[4] == xo && spaces[8] == xo)
    ||(spaces[2] == xo && spaces[4] == xo && spaces[6] == xo)){
    
    console.log(`${xo} has one the game`)
    return true;
  }
  else{
    return false
  }
}

const takeGo = (whoseGo) => {
  console.log(`It is ${whoseGo}'s turn`);
  row = prompt(`Which row do you want to go in 1, 2 or 3`);
  column = prompt(`Which column do you want to go in a, b, or c`);
}

printGrid()

var i;

for (i = 0; i < 9; i++) {
  takeGo(whoseGo);
  addMove(row,column,whoseGo);
  printGrid();
  if (checkIfWin(whoseGo)){
    i=10;
  }
  
  if (i==8){
    console.log(`No Winners here, Joshua has learnt some games end in a draw!! would you like a game of chess`)
  }

  whoseGo = changeTurn(whoseGo);

}

