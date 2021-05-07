
// definitions
let foodArray = new Array();

function FoodObject(pFoodName, pIsSpicy, pIngredients, pOrigin, pUrl){
    this.FoodName = pFoodName;
    this.IsSpicy = pIsSpicy;
    this.Ingredients = pIngredients.split(","); // array of ingredients
    this.Origin = pOrigin;
    this.Url = pUrl;
}

// add 2 examples
foodArray.push(new FoodObject("Beans", "yes", "beans, honey, kethcup", "USA", "https://www.foodnetwork.com/topics/baked-beans"))
foodArray.push(new FoodObject("Pizza", "no", "dough, cheese, sauce", "Italy", "https://www.foodnetwork.com/topics/pizza"))



// dom listeners
document.addEventListener("DOMContentLoaded", function(){
    // debug why buttons are running on any click events
    //document.querySelector("#AddFood").addEventListener("click", AddFood);
    //document.getElementById("ClearFields").addEventListener("click", ClearFields);

    $(document).on("pagebeforeshow", "#ListFood", function (event) {   // have to use jQuery 
        drawTable();
    });
});

// functions
function AddFood(){
    console.log("in the AddFood()...")
    let foodName = document.getElementById("foodName").value;
    let isSpicy = document.getElementById("isSpicy").value;
    let ingredients = document.getElementById("ingredients").value;
    let origin = document.getElementById("origin").value;
    let url = document.getElementById("url").value;

    foodArray.push(new FoodObject(foodName, isSpicy, ingredients, origin, url));
    console.log("logging object info: \n " + foodName + "\n" + isSpicy + "\n" + ingredients + "\n" + origin + "\n" + url);
    DisplayFoodData(foodArray.length - 1);
    ClearFields();
}

function ClearFields(){
    document.getElementById("foodName").value = "";
    document.getElementById("isSpicy").value = "";
    document.getElementById("ingredients").value = "";
    document.getElementById("origin").value = "";
    document.getElementById("url").value = "";
}

function DisplayFoodData(food){
    if(food > foodArray.length && food < 0) {
        console.log("index out of bounds...");
        return;
    }

    let f = foodArray[food];
    console.log(f.FoodName + " = " + f.IsSpicy + " = " + f.Origin + " = " + f.Url);
    f.Ingredients.forEach(x => {
        console.log("in the foreach = " + x);        
    });
}





function drawTable() {
    // get the reference for the table
      // creates a <table> element
    var tbl = document.getElementById('foodtable');
    while (tbl.rows.length > 1) {  // clear, but don't delete the header
        tbl.deleteRow(1);
    }

    // creating rows
    for (var r = 0; r < foodArray.length; r++) {
        var row = document.createElement("tr");

        var cell0 = document.createElement("td");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        var cell3 = document.createElement("td");
        var cell4 = document.createElement("td");

        cell0.appendChild(document.createTextNode(foodArray[r].FoodName));
        row.appendChild(cell0);
        cell1.appendChild(document.createTextNode(foodArray[r].IsSpicy));
        row.appendChild(cell1);
        cell2.appendChild(document.createTextNode(foodArray[r].Origin));
        row.appendChild(cell2);
        cell3.appendChild(document.createTextNode(foodArray[r].Ingredients));
        row.appendChild(cell3);
        cell4.appendChild(document.createTextNode(foodArray[r].Url));
        row.appendChild(cell4);
        
        tbl.appendChild(row); // add the row to the end of the table body
    }

}






