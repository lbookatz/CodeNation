class batsman {
    constructor(name,playOrder){
        this._name = name;
        this._playOrder = playOrder;
        this._score = 0;
        this._bowls =0;
        this._played = false;
        this._ifOut = false;
    }

    batsmanName(){return this._name}
    batsmanScore(){return this._score}
    batsmanbowls(){return this._bowls}
    batsmanplayed(){return this._played}
    batsmanIfOut(){return this._ifOut}

    addscore(score){this._score += parseInt(score)}

    batsmanIn(){this._played = true}
    batsmanOut(){this._ifOut = true}
}

// let bowlResults = ".......111....3.4..6...1..11....2....3...W...11...1..2...33...44...W..W..1..2..1.22....1..1......1....11...111.....1.111..222.333...W...211..22.11....1...1...1...1...1..1..3...4....2...1....3...1....646421.3.222..111...333...444......1111...22..333.444............1...1...1.....11.22.WWW11.....1....11....1....1.W...W..1666..W"
let bowlResults = ".......111....3.4..6...1..11....2....3...W...11...1..2...33...44...W..W..1..2..1.22....1..1......1....11...111.....1.111..222.333...W...211..22.11....1...1...1...1...1..1..3...4....2..."
let overCounter = 1
let batsman1 = new batsman("hold");
let batsman2 = new batsman("hold");
let nextBatsman = 2;
let team = [];

createTeam= () => {
    for (let i=0;i < 11; i++){
        team[i] = new batsman("batsman" + parseInt(i+1));
    }
    batsman1 = team[0];
    batsman1._played = true;    
    batsman2 = team[1];    
    batsman2._played = true;  
}

//this can be chaged to anyway of getting the results and putting them in an array
getArray = () =>{
    let bowlResultsArray = bowlResults.split("")
    return bowlResultsArray
}


readArrayAndUse = (bowlResultsArray) =>{
    for (let i = 0; i < bowlResultsArray.length; i++){
        bowl(bowlResultsArray[i])
    }
}

swapBatsman = ()=>{
    let tempBatsman = batsman1;
    batsman1 = batsman2;
    batsman2 = tempBatsman;
}

changeBatsman = ()=>{
    batsman1._ifOut = true;
    // console.log(batsman1)
    // console.log(batsman1._played)

    batsman1 = team[nextBatsman];
    // console.log(batsman1._name)
    // console.log(batsman1._played)
    batsman1._played = true;
    nextBatsman++;
}

bowl = (result) =>{
    if (nextBatsman<11){
    switch (result){
        case ".":
            break;        
        case "1":
        case "3":
            batsman1.addscore(result);
            swapBatsman();
            break;
        case "2":
        case "4":
            batsman1.addscore(result);            
            break;
        case "w":
        case "W":
            if (nextBatsman<11){
            changeBatsman();}
            // batsman1._played = true;
            break;
    }
    if (overCounter=6){
        swapBatsman();
        overCounter=0
    }
    overCounter++
}
}

playGame = () =>{
    createTeam();
    // test();
    resultsArray = getArray();
    // console.log(resultsArray)
    readArrayAndUse(resultsArray);
    // test();
}

// test = () =>{
//     for (let i = 0; i < team.length; i++){
//         console.log(team[i].batsmanName())
//         console.log(team[i].batsmanScore())
//     }
// }

displayResults = ()=>{
    let runCounter = 0 
    let outCounter = 0
    let resultsDisplay = "<ul>";
    for (let i = 0; i < team.length; i++){
        resultsDisplay += "<li>" + team[i].batsmanName() 
        resultsDisplay += ": " + team[i].batsmanScore() 
        runCounter += parseInt(team[i].batsmanScore())
        if (team[i].batsmanplayed() && team[i].batsmanIfOut()){
            resultsDisplay += " Out" 
            outCounter ++
        }
        else if (team[i].batsmanplayed()){
            resultsDisplay += " Not Out" 
        }        
        
        resultsDisplay += "</li>";
    }
    resultsDisplay += "</ul>";
    resultsDisplay += "<p> " + runCounter + " / " + outCounter +" </p>"
    document.getElementById("results").innerHTML = resultsDisplay;
}

playGame()
displayResults()