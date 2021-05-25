
const coffeeShop = {
    branch: "salford",

    drinks: [   {name:"coke",price:0.450},
                {name:"lemonade",price:0.50},
                {name:"water",price:.30}],
    
    food:[      {name:"pasta",price:1},
                {name:"cheese",price:2.50},
                {name:"bread",price:1.8}],

    orderDrink: [],
    
    orderFood: [],

// code to populate the drinkoptions
    populateDrinkOptions () {
        let drinkSelect = '<select name="drinkOption" id="drinkOption">\n';

        for (let i = 0; i < this.drinks.length; i++){
            drinkSelect = drinkSelect + '<option value="' + this.drinks[i].name + '">' + this.drinks[i].name + '</options>\n';
        }
        drinkSelect = drinkSelect + "</select>"
        drinkSelect = drinkSelect + "<input type='button' id='drinkButton' value='add to order' onclick='coffeeShop.addToOrder(document.getElementById(\"drinkOption\").value,\"drink\")'> "
        return drinkSelect;
    },

    drinksOrdered(){
        let drinkCost = 0;
        let drinkList = "Your drinks order is:\n<ul>";
        for (let i = 0; i < this.orderDrink.length; i++){
            drinkList = drinkList + '<li> "' + this.orderDrink[i].itemName+ '"</li>\n';
            console.log(this.orderDrink)
            drinkCost += parseFloat(this.orderDrink[i].value);
        }
        drinkList = drinkList + '</ul>\n The cost of drinks is ' + drinkCost.toFixed(2);
        document.getElementById("drinklist").innerHTML = drinkList;
    },
    
    addToOrder (item,type) {
        if (type == "drink"){
            this.orderDrink.push(item)
        }
        else{            
            this.orderFood.push(item)
        }
        let cost = 0
        for (let i = 0; i < this.orderDrink.length; i++  ){
            cost += parseFloat(this.orderDrink[i].value); 
        }
    document.getElementById("costOfOrder").value = cost.toFixed(2);
    // console.log(this.orderDrink[0])
    this.drinksOrdered()
    }
};

// add to order and opdate cost


document.getElementById("drinkOptions").innerHTML = coffeeShop.populateDrinkOptions();

// code to populate the foodoptions using diffrent methods

const populateFoodOptions = () =>{
    let opt = '<select name="foodOption" id="foodOption">\n';

    for (let i = 0; i < coffeeShop.food.length; i++  ){
        opt = opt + '<option value="' + coffeeShop.food[i].price + '">' + coffeeShop.food[i].name + '</options>\n';
    }
    opt = opt + "</select>"
    opt = opt + "<input type='button' id='foodButton' value='add to order' onclick='coffeeShop.addToOrder(document.getElementById(\"foodOption\"),\"food\");'> "
    return opt;
}

document.getElementById("foodOptions").innerHTML = populateFoodOptions()