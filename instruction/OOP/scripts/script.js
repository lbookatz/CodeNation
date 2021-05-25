// class Bunny{
//     constructor (name){
//         this._name = name;
//         this._hops = 0;
//     }
//     get name() {
//         return this._name;
//     }
//     get hops(){
//         return this._hops;
//     }
    
//     increaseHops(){
//         this._hops++;
//     } 
    
//     // increaseHops(x){
//     //     this._hops+=x;
//     // } 
// }

// const rosie = new Bunny("rosie");

// console.log(rosie)

// rosie.increaseHops();

// console.log(rosie)


// rosie.increaseHops(5);

// console.log(rosie)
// rosie._name ="lance"

// console.log(rosie)

class cars{
    constructor(reg){
        this._reg = reg;
        this._parked = 0.0;
        this._charged = 1.5;
    }

    caculateCost(){
        return this._parked * this._charged
    }

    //show info
    showInfo() {
        document.getElementById("info").innerHTML = `<p>you parked for ${this._parked} hours </p><p>You owe ${this.caculateCost()}</p>`  
    }

}

const test = new cars ("NB05 ORF");
// console.log(test._parked)
test._parked ++;
test._parked ++;
test._parked ++;
test._parked ++;
test._parked ++;

// test.showInfo()


class staff extends cars { 
    constructor(reg){
        super(reg);
        this._credit= 0;
    }

    get credit(){
        return this._credit
    }

    addCredit(amount) {
        this.credit = this.credit + amount
    }

    checkCredit() {
        return this._credit > this.caculateCost()
    }

    staffPayAndShowInfo(){
        if (checkCredit){
        document.getElementById("info").innerHTML = `
            <p>you parked for ${this._parked} hours </p>
            <p> £${this.caculateCost()} has been taken off your credit</p>
            <p> you still have £${this._credit-this.caculateCost()} credit left.`
            this.credit -= this.caculateCost()
        }
        else{
        document.getElementById("info").innerHTML = `
            <p>you parked for ${this._parked} hours </p>
            <p>you have run out of credit and still owe ${this.caculateCost()-this.credit}}</p>`
        
        this._credit=0
        }
    }
}

const lance = new staff ("NB05 ORF");

lance._parked ++;
lance._parked ++;
lance._parked ++;

lance.addCredit(10)

lance.staffPayAndShowInfo()