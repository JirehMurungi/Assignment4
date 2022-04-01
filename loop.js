/*
syntax
for (counter, condition, expression) {
    code goes here
}
*/

// elevator going down(For loop)
for (let floor=3; floor>1; floor--) {
    console.log ("Going down");
    if (floor==1) {
        console.log("You have arrived at your destination")
    }
}

//while loop
const required_age = 18;
let currentAge = 2;

while (currentAge<required_age) {
    currentAge+=1;
    console.log("you are under age", currentAge)
    
}
//read about
//forEach
//for(of)

//Arrays
/*
let sumArray = [];
let myArrayV2 = new Array(); //TBD
*/
let fruits = ["Pears","Jackfruit","Grapes","Apples","Bananas","Mellon","Mangoes"];

// total number of items
// array.length
let lastItem = fruits[fruits.length-1];
console.log(fruits[5]);
fruits.push("Apples");
console.log("last item is:", lastItem,fruits[fruits.length-1]);
fruits.push("Lemons");
console.log("last item is:", lastItem,fruits[fruits.length-1]);
console.log (fruits)

//concantenate arrays
let numSet1 = [1,2,3,4,5,];
let numSet2 = [6,7,8,9,10];

let numbers = numSet1 + numSet2;

//loop over items
//appr1:
for (let item=0; item<fruits.length; item++) {
    console.log ("Fruit:", fruits(item))
}

//appr2:
fruits.forEach(function(fruit){
    console.log("FR: ", fruit);
    let appleIndex = fruits.findIndex(
        fruitName => fruitName.toLowerCase()=== 'bananas')
        console.log ("Index found", appleIndex)
        if (appleIndex !=-1){
            console.log ("found it, exit", appleIndex)
        }
}



)