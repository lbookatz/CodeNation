class batsman {
    constructor(name){
        this._name = name;
        this._score = 0;
        this._bowls =0;
        this._played = false;
        this._ifOut = false;
    }

    bowlerName(){return this._name}
    bowlerScore(){return this._score}
    bowlerbowls(){return this._bowls}
    bowlerplayed(){return this._played}
    bowlerIfOut(){return this._ifOut}

    addscore(score){this._score += score}

    addtest(){this._score += 1}

    bowlerIn(){this._played = true}
    bowlerOut(){this._ifOut = true}

    test(){console.log(this._name);}
    test1(){console.log(this._score);}
}

class batsmanTest extends batsman{
        constructor(name){
            super(name);
            this._score = 50;
        }
    
        addtest(){this._score += 20}
}


const bat1 = new batsman("bob");

const bat2 = new batsmanTest("lance");

console.log(bat1.bowlerScore())

console.log(bat2.bowlerScore())

bat1.addtest()

bat2.addtest()

console.log(bat1.bowlerScore())

console.log(bat2.bowlerScore())


// batsman1 = bat1

// const bat2 = new batsman("jeremy");

// batsman2 = bat2



