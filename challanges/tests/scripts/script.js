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

    bowlerIn(){this._played = true}
    bowlerOut(){this._ifOut = true}

    test(){console.log(this._name);}
    test1(){console.log(this._score);}
}

const bat1 = new batsman("bob");

batsman1 = bat1

const bat2 = new batsman("jeremy");

batsman2 = bat2



