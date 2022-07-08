// Only change code below this line
const myArray = ["string", 34];

//Escape Sequences in Strings
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

//Concatenating Strings with Plus Operator

const myStr = "This is the start. "+"This is the end."; // Change this line

//Concatenating Strings with the Plus Equals Operator

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence."

//Appending Variables to Strings

// Change code below this line
const someAdjective = "awesome";
let myStr = "Learning to code is ";
myStr += someAdjective

//Find the Length of a String

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

//Use Bracket Notation to Find the First Character in a String

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

//Understand String Immutability

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line


//Store Multiple Values in one Variable using JavaScript Arrays
// Only change code below this line
const myArray = ["string", 34];

//Nest one Array within Another Array
const myArray = [["JS", "React"],["Node","15"]];

//Access Array Data with Indexes
const myArray = [50, 60, 70];
let myData = myArray[0];

//Modify Array Data With Indexes
// Setup
const myArray = [18, 64, 99];
// Only change code below this line
myArray[0] = 45;

//Access Multi-Dimensional Arrays With Indexes
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];
const myData = myArray[2][1];

//Manipulate Arrays With push()
// Setup
const myArray = [["John", 23], ["cat", 2]];
// Only change code below this line
myArray.push(["dog", 3])

//Manipulate Arrays With pop()
// Setup
const myArray = [["John", 23], ["cat", 2]];
// Only change code below this line
const removedFromMyArray = myArray.pop();

//Manipulate Arrays With shift()
// Setup
const myArray = [["John", 23], ["dog", 3]];
// Only change code below this line
const removedFromMyArray = myArray.shift();

//Manipulate Arrays With unshift()
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
// Only change code below this line
myArray.unshift(["Paul", 35])

//Shopping List
const myList = [["Milk", 10], ["Bred", 6], ["Meat", 75], ["Pizza", 56], ["Peperoni", 36]];

//Write Reusable JavaScript with Functions
function reusableFunction(){
    console.log("Hi World");
}
reusableFunction();

//Passing Values to Functions with Arguments
function functionWithArgs(a, b){
    console.log(a + b);
}

//Return a Value from a Function with Return
function timesFive(a){
    return a * 5;
}

//Global Scope and Functions
// Declare the myGlobal variable below this line
let myGlobal = 10;
function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}
// Only change code above this line
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

//Local Scope and Functions
function myLocalScope() {
    // Only change code below this line
    let myVar;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

//Global vs. Local Scope in Functions
// Setup
const outerWear = "T-Shirt";
function myOutfit() {
    // Only change code below this line
    const outerWear  = "sweater";
    // Only change code above this line
    return outerWear;
}
myOutfit();

//Understanding Undefined Value returned from a Function
// Setup
let sum = 0;
function addThree() {
    sum = sum + 3;
}
// Only change code below this line
function addFive(){
    sum +=5;
}
// Only change code above this line
addThree();
addFive();

//Assignment with a Returned Value
// Setup
let processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
// Only change code below this line
processed = processArg(7);
