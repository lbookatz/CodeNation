// //activity 1
// let favFilm = ["Godfather","Star Wars","Shawshank redemption",]
// favFilm.push("Fiddler on the roof");
// favFilm.push("12 Angry Men");

// for (let i = 0; i < favFilm.length; i++){
//     console.log(favFilm[i]);
// }

// //activity 2
// for(let i = 0; i<6 ; i++){
//     console.log(Math.random() * 49 + 1)
// }

// //activity 4
// let favFilm = ["Godfather","Star Wars","Ghostbusters","Fiddler on the roof"]

// const filmCheck =(film) => {
//     if (film[2].toLowerCase () == "ghostbusters"){ return "yey it's ghostbusters"}
//     else {return "booo, we want ghostbusters"}
// }

// for (let i = 0; i < favFilm.length; i++){
//     console.log(favFilm[i]);
// }

// console.log(filmCheck(favFilm));

// // activity 5

// for(let i = 0; i<6 ; i++){
//     let num = (Math.floor(Math.random() * 30 + 1))
//     console.log(num)
//     if (num % 7 == 0) {console.log("this is divisable by 7")}
//     else {console.log("this is not divisable by 7")}
// }

// //activity 6
// //for loop and while loop
// console.log("This is a guessing game you have 10 tries to guess a number between 1 and 100")

// let num = (Math.floor(Math.random() * 100 + 1))
// let playAgain = "y"

// const checkGuess = (guess) =>{
//     if (guess == num) {return true}
//     else{return false}
// }

// while (playAgain == "y"){
//     for (let i = 0; i < 10; i++){
//      let guess = prompt("please enter your guess");
//        if (checkGuess(guess)){
//            console.log("well done");
//            Break;}
//            else{console.log("sorry wrong answer");}
//     }
//     playAgain = prompt("would you like to play again y or n");
// }

// //for loop and  do while loop

// console.log("This is a guessing game you have 10 tries to guess a number between 1 and 100")

// let num = (Math.floor(Math.random() * 100 + 1))

// const checkGuess = (guess) =>{
//     if (guess == num) {return true}
//     else{return false}
// }

// do {
//     for (let i = 0; i < 10; i++){
//      let guess = prompt("please enter your guess");
//        if (checkGuess(guess)){
//            console.log("well done");
//            Break;}
//            else{console.log("sorry wrong answer");}
//     }
//     let playAgain = prompt("would you like to play again y or n");
// }
// while (playAgain == "y")

// //activity 7

// const checkPrime = (num) => {
//     for (let i = 2; i < num; i++ ){
//         //console.log(i) 
//         if(num % i == 0){return false}   
//         //console.log(num+" "+i +" "+num % i) ;    
//     }
//     return true
// }


// for (let i = 0; i < 20; i++){
//     if (checkPrime(i)) {console.log(`${i} is a prime number`)}
//     else {console.log(`${i} is not a prime number`)}
// }