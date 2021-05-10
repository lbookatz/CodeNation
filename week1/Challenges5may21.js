
// // challange 1
// let password = "password"
// if (password.length < 8){
//     console.log("Your password is to short!")
// }
// else {
//     console.log(`Your password Is ${password}`)
// }

// //challange 2
// let num = 15 ;
// if (num % 3 == 0 || num % 5 == 0 ){
//     console.log("This number is divisable by 3 or 5");
// }
// else{
//     console.log("This number is not divisible by 3 or 5");
// }

////challange 3
// First try
// let num = 3;
// console.log(num % 3);
// //need an if statment to cheack input is integer
// switch(num){
//     case num % 3 == 0:
//         console.log("fizz");
//         break;
//     case num%5 == 0:
//         console.log("buzz");

//         console.log("Fizz Buzz")
//         break;
//     default:
//         console.log(`${num}`)
//         break;
// }

// //second try
// let num = 4;
// if (num % 3 == 0 && num % 5 == 0){
//     console.log("Fizz Buzz")
// }
// else if (num % 3 == 0 ){
//     console.log("Fizz")
// }
// else if (num % 5 == 0 ){
//     console.log("Buzz")
// }
// else{
//     console.log(`${num}`)
// }

// // //challange 4
// let num = prompt("give me your first number");
// let check = 0;
// let lengthOfNum = num.length;

// for (i = 0; i < num.length/2; i++) {
//   lengthOfNum--;
//   //console.log(i); 
//   //console.log(lengthOfNum);
  
//   if (num.charAt(i)!=num.charAt(lengthOfNum)){
//      check = 1;
//     }
//     //console.log(check);
// }

// if (check == 0) {
//   console.log("Yes this is a Palindrome")
// }
// else{
//   console.log("this is NOT a Palindrome") 
// }

// // //challange 5
// var current = new Date();
// let time = current.getHours()
// let placeOfWork = "home"
// let townOfHome = "Salford"

// time = prompt("time?")

// if (time <= 7){
//   console.log(`I'm at home`)
// }
// else if (time <= 8){
//   console.log(`I'm commuting`)
// }
// else if (time <= 12){
//   console.log(`I'm at work`)
// }
// else if (time <= 13){
//   console.log(`Lunch!!`)
// }
// else if (time <= 17){
//   console.log(`Back to work`)
// }
// else if (time <= 18){
//   console.log(`going Home`)
// }
// else{
//   console.log(`bed`)
// }

// // and yes it would be nice to include half hours etc.



// //challange 6

// //let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwsh" ;
// let str = "jordan" ;

// str = str.toLowerCase()
// let position = 0

// let i = str.length
// while (i > -1) {
  
//   strChar = str.charAt(i) ;
   
//   switch (strChar) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//       position = i+1;
//       i=-1;
//       break;
//     default:
//       i--;
//       break;
//   }

// }
// if (position !=0){
//   console.log(`The last vowel is in position ${position}`);
//   }
// else {
//   console.log(`there is no vowel`)
//   }

// //challange 7
// let word = prompt("What is your word?");
// //console.log(word.length)
// //console.log(word.charAt(0))
// //console.log(word.charAt(word.length-1))

// if (word.charAt(0) == word.charAt(word.length-1)){
//   console.log("true");
// }
// else{
//   console.log("False");
// }

// //challange 8
// let num1 = prompt("num1?");
// let num2 = prompt("num2?");

// let sum = parseInt(num1) +parseInt(num2)

// if(sum%2 == 0){
//   console.log(sum)
// }
// else{
//   console.log(num1*num2)
// }
// // I was goign to add some text to the answers but decided to do exactly as the challange asked