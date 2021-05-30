
let arrayOfAnimals = []
let currentAnimalSelected
let numberOfBunnies = 0
let bunnyCounter = 1


class Animal{
    constructor(name){
        this._name = name;
        this._hunger = 100;
        this._thirst = 100;
        this._bored = 100;
        arrayOfAnimals.push(this);
        // this.populateAnimalsList();
        this.createEventListners();
    }

    get name(){return this._name;}
    get hunger(){return this._hunger;}
    get thirst(){return this._thirst;}

    eat(){
        this._hunger++;
    } 
    drink(){
        this._thirst++;
    }
    bored(){
        this._bored++;
    }

    // populateAnimalsList () {
    //     let animalsList = '<select name="animalsList" id="animalsList">\n';

    //     for (let i = 0; i < arrayOfAnimals.length; i++){
    //         animalsList = animalsList + '<option value="' + i + '">' + this.name + '</options>\n';
    //     }
    //     animalsList = animalsList + "</select>"
    //     document.getElementById("selectedAnimalDiv").innerHTML=animalsList;
    
    //     for (let i = 0; i < arrayOfAnimals.length; i++){
    //         console.log(arrayOfAnimals[i])    
    //     }
    // }

    createEventListners(){
        // accessing the elements with same classname
        let elements = document.querySelectorAll('.animalsBox');
        // adding the event listener by looping
        elements.forEach(element => {
            element.addEventListener('click', (e)=>{
                console.log('someone hit me');
                console.log(element.id);

                for (let i = 0; i < arrayOfAnimals.length; i++){
                    if (arrayOfAnimals[i].name == element.id) {
                        currentAnimalSelected = arrayOfAnimals[i]
                        // arrayOfAnimals[i].ifPlayedWith() 
                        // document.getElementById("test").innerHTML = console.log(arrayOfAnimals[i].hunger)  
                    }
                }
            });
        }); 
    }

    animalPoop(maxHunger){
        if (this._hunger > maxHunger){
            let node = document.getElementById(currentAnimalSelected.name);
            node.innerHTML = "<img src='../images/poop.png' id='animalPoop' class='animalPoop'></img>" + node.innerHTML
        }
    }

    cleanPets(){
        //could choose to make theig enabled and disabled

        // // accessing the elements with same classname
        // let elements = document.querySelectorAll('.animalPoop');
        // // adding the event listener by looping
        // elements.forEach(element => {
        //     console.log("test");
        //     console.log(element);
        //     console.log(element.parentNode);

        //     element.parentNode.removeChild(element);
        // });


        // let paras = document.getElementsByClassName('animalPoop');

        // while(paras[0]) {
        //     paras[0].parentNode.removeChild(paras[0]);
        // }​
        document.querySelectorAll('.animalPoop').forEach(e => e.parentNode.removeChild(e));

        let el = document.getElementById('animalPoop');
        // while(el[0]) {
            el.parentNode.removeChild(el);
        // }
    }

    salePet(){
        console.log(currentAnimalSelected)
        let element = document.getElementById(currentAnimalSelected.name);
        element.parentNode.removeChild(element);
        console.log(currentAnimalSelected)
        this.createEventListners();
    }

    checkStatus(){

        const hunger = this._hunger;

        switch(true){
            case hunger > 150:
                //overfed animal dies
                break;
            case hunger > 75:
                //no message
                break;
            case hunger > 25:
                //I'm Hungry
                break;
            case hunger > 0:
                //I'm So Hungry
                break;
            default:
                //dead
        }

        const thirst = this._thirst;

        switch(true){
            case thirst > 150:
                //overfed animal dies
                break;
            case thirst > 75:
                //no message
                break;
            case thirst > 25:
                //I'm thirsty
                break;
            case thirst > 0:
                //I'm very thirsty
                break;
            default:
                //dead
        }

        const bored = this._bored;

        switch(true){
            case bored > 150:
                //overexcited runs for the wind
                break;
            case bored > 75:
                //no message
                break;
            case bored > 25:
                //I'm bored
                break;
            case bored > 0:
                //I'm verybored
                break;
            default:
                //bored animal runs away
        }
    }
}

class bunny extends Animal {
    constructor(name, lovesCarrot){
        super(name);
        this._lovesCarrot = lovesCarrot;
        numberOfBunnies ++;
        currentAnimalSelected = this
    }

    get lovesCarrots(){return this._lovesCarrot;}

    hop(){
        //this will make the image animate up and down
    }

    buttonPressed (action) {

        switch (action){
            case "feed":
                this._hunger += 10;
                this._thirst -= 5;
                this._bored += 5;
                break;

            case "drink":
                this._hunger += 0;
                this._thirst += 10;
                this._bored += 0;
                //make a bowl appear for 5 seconds
                break;

            case "play":
                this._hunger -= 5;
                this._thirst -= 5;
                this._bored += 10;
                break;

            case "teach":
                //not yet implemented
                break;

            case "clean":
                //needs to remove poop
                this.cleanPets()
            case "sale":
                this.salePet()
                break;
        }        

        this.animalPoop(110);
    
        let randomNumber = (Math.floor(Math.random() * 10 + 1));
        
        //need to add a random to pick arrayOfAnimals[random] (use the length of array to make the random) to effect other pets. 
        switch (randomNumber){
            case 1:
            case 2:
                this._bored -= 15
                break;
            case 3:
            case 4:
            case 5:
            case 6:
                this._hunger -= 15
            case 7:
                this._thirst -= 15
                break;
            case 8:
            case 9:
                break;
            case 10:
                //2 bunnies means baby bunnies.......

                //  let numberOfBunnies = 0
                // for (let i = 0; i < arrayOfAnimals.length; i++){
                //     if (arrayOfAnimals[i].class == "bunny") {
                //         numberOfBunnies++
                //     }
                // console.log(numberOfBunnies)

                if (numberOfBunnies > 1){
                    let animalName = "Kitten" + bunnyCounter
                    document.getElementById("animalsContainer").innerHTML += 
                    "<div class='animalsBox' id='" + animalName + "'> <img class='animalsImg kitten'  src='../images/bunny.jpg' alt='bunny'></img><p>" + animalName + "</p></div>";
        
                    animalName = new bunny(animalName, true);
                    bunnyCounter ++;
                    }
                break;
        }    
    }
};

class dog extends Animal {
    constructor(name){
        super(name);
    }

    bark(){
        //play a barking noise
    }

    buttonPressed (action) {

        switch (action){
            case "feed":
                this._hunger += 10;
                this._thirst -= 5;
                this._bored += 5;
                break;

            case "drink":
                this._hunger += 0;
                this._thirst += 10;
                this._bored += 0;
                //make a bowl appear for 5 seconds
                break;

            case "play":
                this._hunger -= 5;
                this._thirst -= 5;
                this._bored += 10;
                break;

            case "teach":
                //not yet implemented
                break;

            case "clean":
                //needs to remove poop
                this.cleanPets()
            case "sale":
                this.salePet()
                break;
        }        

        this.animalPoop(130);


        //need to add a random to pick arrayOfAnimals[random] (use the length of array to make the random) to effect other pets. 
        //to allow random events on button press
        let randomNumber = (Math.floor(Math.random() * 10 + 1));
            switch (randomNumber){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                this._bored -= 15
            case 7:
            case 8:
            case 9:
                break;
            case 10:
                break;
        }    
    }
};


class cat extends Animal {
    constructor(name){
        super(name);
    }

    purr(){
        //Play a purr
    }

    get lovesCarrots(){return this._lovesCarrot;}

    buttonPressed (action) {

        switch (action){
            case "feed":
                this._hunger += 15;
                this._thirst += 0;
                this._bored += 0;
                break;

            case "drink":
                this._hunger += 0;
                this._thirst += 15;
                this._bored += 0;
                //make a bowl appear for 5 seconds
                break;

            case "play":
                this._hunger -= 15;
                this._thirst -= 5;
                this._bored += 20;
                break;

            case "teach":
                //not yet implemented
                break;

            case "clean":
                //needs to remove poop
                this.cleanPets()
            case "sale":
                this.salePet()
                break;
        }        

        this.animalPoop(130);


        //need to add a random to pick arrayOfAnimals[random] (use the length of array to make the random) to effect other pets. 
        //to allow random events on button press
        let randomNumber = (Math.floor(Math.random() * 10 + 1));
            switch (randomNumber){
            case 1:
            case 2:
            case 3:
            case 4:
                this.bored -= 20
                break;
            case 5:
            case 6:
                this.hunger -= 10
            case 7:
            case 8:
                this._thirst -= 10
                break;
            case 9:
                break;
            case 10:
                break;
        }    
    }
};

document.getElementById("catButton").addEventListener("click",()=>{
    let animalName = prompt("What would you like to call your cat?")
    //could add a random generator for diffrent animal pictures.
    if (animalName) {
        document.getElementById("animalsContainer").innerHTML += 
            "<div class='animalsBox' id='" + animalName + "'> <img class='animalsImg'  src='../images/cat.jpg' alt='cat'></img><p>" + animalName + "</p></div>";
        
        animalName = new cat(animalName, true);
    }
    else{
        alert("You didn't give your animal a name?")        
    }      
});

document.getElementById("bunnyButton").addEventListener("click",()=>{
    let animalName = prompt("What would you like to call your bunny?")
    if (animalName) {
        document.getElementById("animalsContainer").innerHTML += 
            "<div class='animalsBox' id='" + animalName + "'> <div> <img class='animalsImg' src='../images/bunny.jpg' alt='bunny'></img><p>" + animalName + "</p></div></div>";
        animalName = new bunny(animalName, true);
    }
    else{
        alert("You didn't give your animal a name?")        
    }    
});

document.getElementById("dogButton").addEventListener("click",()=>{
    let animalName = prompt("What would you like to call your dog?")
    if (animalName) {
        document.getElementById("animalsContainer").innerHTML += "<div class='animalsBox' id='" + animalName + "' > <img class='animalsImg' src='../images/dog.jpg' alt='dog'></img><p>" + animalName + "</p></div>";
        animalName = new dog(animalName, true);
    }
    else{
        alert("You didn't give your animal a name?")        
    }      
});

//create funtion that run 10 seconds to check status of pet and then go through switch
// document.getElementsByClassName("animalsBox").addEventListener("click",() => {
// console.log(34)
// });

// // accessing the elements with same classname
// let elements = document.querySelectorAll('.animalsImg');

// // adding the event listener by looping
// elements.forEach(element => {
//    element.addEventListener('click', (e)=>{
//      console.log('someone hit me');
//    });
// });

let buttonFeed = document.getElementById("feed");
buttonFeed.addEventListener("click", function(event){
    currentAnimalSelected.buttonPressed("feed")
    // //need to delete, just for checking if diffrent animals react diffrently
    // for (let i = 0; i < arrayOfAnimals.length; i++){
    //     console.log(arrayOfAnimals[i])    
    // }
    //console.log(arrayOfAnimals) 
});

let buttonDrink = document.getElementById("drink");
buttonDrink.addEventListener("click", function(event){
    currentAnimalSelected.buttonPressed("drink")
});

let buttonPlay = document.getElementById("play");
buttonPlay.addEventListener("click", function(event){
    currentAnimalSelected.buttonPressed("play")  
});

let buttonTeach = document.getElementById("teach");
buttonTeach.addEventListener("click", function(event){
    currentAnimalSelected.buttonPressed("teach")
});

let buttonClean = document.getElementById("clean");
buttonClean.addEventListener("click", function(event){
    currentAnimalSelected.buttonPressed("clean")
});


let buttonSale = document.getElementById("sale");
buttonSale.addEventListener("click", function(event){
    currentAnimalSelected.buttonPressed("sale")
});