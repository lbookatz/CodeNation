let one = 0
let two = 0
let three = 0
let four = 0
let five = 0
let six = 0


document.getElementById("start").addEventListener("click", () =>{
let x = document.getElementById("num").value

for (let i = 0; i <= x;i++){
    //get a random number between 1 and 6
    let valueOfDice = (Math.floor(Math.random() * 6 + 1));
    switch (valueOfDice){
        case 1:
            one++;
            break;
        case 2:
            two++;
            break;
        case 3:
            three++;
            break;
        case 4:
            four++;
            break;
        case 5:
            five++;
            break;
        case 6:
            six++;
            break;
    }
}

document.getElementById(`one`).textContent = `${one} 1's`;
document.getElementById(`two`).textContent = `${two} 2's`;
document.getElementById(`three`).textContent = `${three} 3's`;
document.getElementById(`four`).textContent = `${four} 4's`;
document.getElementById(`five`).textContent = `${five} 5's`;
document.getElementById(`six`).textContent = `${six} 6's`;
})

document.getElementById("reset").addEventListener("click", () =>{
one = 0
two = 0
three = 0
four = 0
five = 0
six = 0

document.getElementById(`one`).textContent = `${one} 1's`;
document.getElementById(`two`).textContent = `${two} 2's`;
document.getElementById(`three`).textContent = `${three} 3's`;
document.getElementById(`four`).textContent = `${four} 4's`;
document.getElementById(`five`).textContent = `${five} 5's`;
document.getElementById(`six`).textContent = `${six} 6's`;

})