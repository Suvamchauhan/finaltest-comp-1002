console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
/*
Name: Suvam Chauhan
Student Number: 200511405
 */

// Step 2: Create a block scoped, immutable variable that stores an empty array
let names = [];

// Step 3: Add the 3 people's names to the array
names.push('Suvam','Suraj','Dipesh')
// Step 4: Remove the second array item from the array
names.splice([1],1)

// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable
let uppNames = names.toUpperCase;
console.log(uppNames)
// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";
function myFunction(){
    alert("Hello from Boo the World's Cutest Dog!");
}