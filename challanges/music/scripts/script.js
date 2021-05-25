let sounda = document.getElementById("sounda");
let soundb = document.getElementById("soundb");
let soundc = document.getElementById("soundc");
let soundd = document.getElementById("soundd");
let sounde = document.getElementById("sounde");
let soundf = document.getElementById("soundf");
let soundg = document.getElementById("soundg");

document.addEventListener('keypress', (keyValue) => {
// console.log(keyValue.keyCode)

    switch (keyValue.keyCode){
        case 97:
            sounda.play();
            break;
        case 115:
            soundb.play();
            break;
        case 100:
            soundc.play();
            break;
        case 102:
            soundd.play();
            break;
        case 106:
            sounde.play();
            break;
        case 107:
            soundf.play();
            break;        
        case 108:
            soundg.play();
            break;
        // case 59:
        //     sounda.play();
        //     break;
    }

} )     