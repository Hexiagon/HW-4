/*Write a new program (HTML, CSS, and JavaScript)
This one should keep track of how many calories you have eaten.
It should allow the user to enter a food name and a number of calories.**
Each time they enter a new item, a food object should be created and added to an array.**
Write out the updated contents of the array in the console.log so that you can verify your code is correct
at this point.**
Also, in that same click event, you should update a display on the screen that shows the user the total
number of calories they have consumed.**
(My version creates 2 food items, a banana and hot dog when I first start the program, so you will see
that when I add one item with 200 calories, there are already 3 items in my object list and the calorie
output shows 670. You are not required to do that, but I suggest you do.)
Tip: in your constructor, use
this.calories = parseInt(pCalories); // that forces the input value to be treated as number, not a string*/

let foodArray = [];

function Food(){
    this.foodName = document.getElementById("foodName").value;
    this.calories = parseInt(document.getElementById("calories").value);
};

function pushToArray(){
    foodArray.push(new Food());
    console.log(foodArray);
    document.getElementById("totalcalories").value = calcTotalCalories();
}

function calcTotalCalories(){
    let totalCalories = 0;
    foodArray.forEach(food => {
        totalCalories += food.calories;
    });
    return totalCalories;
}