
// definitions
let foodArray = new Array();

function FoodObject(pFoodName, pIsSpicy, pIngredients, pOrigin, pUrl){
    this.FoodName = pFoodName;
    this.IsSpicy = pIsSpicy;
    this.Ingredients = pIngredients.split(","); // array of ingredients
    this.Origin = pOrigin;
    this.Url = pUrl;
}

// $(document).ready(function(){
//     // jQuery methods go here
// });

// dom listeners
document.addEventListener("DOMContentLoaded", function(){
    // debug why buttons are running on any click events
    //document.querySelector("#AddFood").addEventListener("click", AddFood);
    //document.getElementById("ClearFields").addEventListener("click", ClearFields);

    $(document).on("pagebeforeshow", "#ListFood", function (event) {   // have to use jQuery 
        DisplayAll();
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

// TODO: improve output
function DisplayAll(){
    let myUl = document.getElementById("foods");
    myUl.innerHTML = "";
    foodArray.forEach(f => {  
        let listOfIngredients;
        f.Ingredients.forEach(i => {
            listOfIngredients = " | " + i
        });

        let li = document.createElement('li');
        li.innerHTML = f.FoodName + " = " + f.IsSpicy + " = " + f.Origin + " = " + f.Url + " = " + listOfIngredients;
        myUl.appendChild(li);

    });
}



