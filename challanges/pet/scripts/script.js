
let arrayOfAnimals = []

class Animal{
    constructor(name){
        this._name = name;
        this._hunger = 100;
        this._thirst = 100;
        this._bored = 100;
        arrayOfAnimals.push(name);
        this.populateAnimalsList();
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


    ifPlayedWith(){
        this._hunger--;
        this._thirst--;
        this._bored++;
    }

    populateAnimalsList () {
        let animalsList = '<select name="animalsList" id="animalsList">\n';

        for (let i = 0; i < arrayOfAnimals.length; i++){
            animalsList = animalsList + '<option value="' + arrayOfAnimals[i] + '">' + arrayOfAnimals[i] + '</options>\n';
        }
        animalsList = animalsList + "</select>"
        document.getElementById("selectedAnimalDiv").innerHTML=animalsList;
    }

}

class bunny extends Animal {
    constructor(name, lovesCarrot){
        super(name);
        this._lovesCarrot = lovesCarrot;
    }

    get lovesCarrots(){return this._lovesCarrot;}
};

class dog extends Animal {
    constructor(name, lovesCarrot){
        super(name);
        this._lovesCarrot = lovesCarrot;
    }

    get lovesCarrots(){return this._lovesCarrot;}
};

class cat extends Animal {
    constructor(name, lovesCarrot){
        super(name);
        this._lovesCarrot = lovesCarrot;
    }

    get lovesCarrots(){return this._lovesCarrot;}
};

document.getElementById("catButton").addEventListener("click",()=>{
    let animalName = prompt("What would you like to call your cat?")
    //could add a random generator for diffrent animal pictures.
    if (animalName) {
        document.getElementById("animalsContainer").innerHTML += 
            "<div class='animalsBox'> <img class='animalsImg' id='" + animalName + "' src='../images/cat.jpg' alt='cat'></img><p>" + animalName + "</p></div>";
        
        animalName = new cat(animalName, true);

        // accessing the elements with same classname
        let elements = document.querySelectorAll('.animalsImg');

        // adding the event listener by looping
        elements.forEach(element => {
            element.addEventListener('click', (e)=>{
                console.log(element.id._name);
            });
        });

    }
    else{
        alert("You didn't give your animal a name?")        
    }      
});

document.getElementById("bunnyButton").addEventListener("click",()=>{
    let animalName = prompt("What would you like to call your bunny?")
    if (animalName) {
        document.getElementById("animalsContainer").innerHTML += "<div class='animalsBox'> <img class='animalsImg' id='" + animalName + "' src='../images/bunny.jpg' alt='bunny'></img><p>" + animalName + "</p></div>";
        animalName = new bunny(animalName, true);
    }
    else{
        alert("You didn't give your animal a name?")        
    }    
});

document.getElementById("dogButton").addEventListener("click",()=>{
    let animalName = prompt("What would you like to call your dog?")
    if (animalName) {
        document.getElementById("animalsContainer").innerHTML += "<div class='animalsBox'> <img class='animalsImg' id='" + animalName + "' src='../images/dog.jpg' alt='dog'></img><p>" + animalName + "</p></div>";
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

// accessing the elements with same classname
let elements = document.querySelectorAll('.animalsImg');

// adding the event listener by looping
elements.forEach(element => {
   element.addEventListener('click', (e)=>{
     console.log('someone hit me');
   });
});

// document.getElementById("play").addEventListener("click",()=>{
//     console.log(document.getElementById("animalsList").value)
//     const name = document.getElementById("animalsList").value;
//     console.log(name)
//     name.ifPlayedWith();
//     console.log(document.getElementById("animalsList").value._hunger)
// });

