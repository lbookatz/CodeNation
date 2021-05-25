
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
    constructor(_reg){
        super(_reg);
        this._credit= 0;
    }

    get credit(){
        return this._credit
    }

    addCredit(amount) {
        this._credit = this._credit + amount
    }

    checkCredit() {
        return this._credit > this.caculateCost()
    }

    staffPayAndShowInfo(){
        if (this.checkCredit()){
        document.getElementById("info").innerHTML = `
            <p>you parked for ${this._parked} hours </p>
            <p> £${this.caculateCost()} has been taken off your credit</p>
            <p> you still have £${this._credit-this.caculateCost()} credit left.`
            this._credit -= this.caculateCost()
        }
        else{
        document.getElementById("info").innerHTML = `
            <p>you parked for ${this._parked} hours </p>
            <p>you have run out of credit and still owe ${this.caculateCost()-this._credit}</p>`
        
        this._credit=0
        }
    }


}

const lance = new staff ("NB05 ORF");

lance._parked ++;
lance._parked ++;
lance._parked ++;

lance._parked = 30;



document.getElementById("calcPay").addEventListener("click", ()=>{
        lance.staffPayAndShowInfo()
})

//ideally we would need a textbox to get the instance of the class we are working with
//but that is another days project
document.getElementById("addCreditButtton").addEventListener("click", ()=>{
        lance.addCredit(document.getElementById("addCredit").value)
})