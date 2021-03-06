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

//Stand in Line
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    return arr.shift();
    // Only change code above this line
}
// Setup
const testArr = [1, 2, 3, 4, 5];
// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Understanding Boolean Values
function welcomeToBooleans() {
    // Only change code below this line
    return !false; // Change this line
    // Only change code above this line
}

//Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if(wasThatTrue){
        return "Yes, that was true"
    }
    return "No, that was false"
    // Only change code above this line
}

//Comparison with the Equality Operator
// Setup
function testEqual(val) {
    if (val==12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}
testEqual(10);

//Comparison with the Strict Equality Operator
// Setup
function testStrict(val) {
    if (val===7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}
testStrict(10);

//Practice comparing different values
// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}
compareEquality(10, "10");

//Replace Loops using Recursion
function sum(arr, n) {
    // Only change code below this line
    if(n <= 0){
        return 0;
    }else{
        return (sum(arr, n-1) + arr[n-1])
    }
    // Only change code above this line
}

//Comparison with the Inequality Operator
// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}
testNotEqual(10);

//Comparison with the Strict Inequality Operator
// Setup
function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}
testStrictNotEqual(10);

//Comparison with the Greater Than Operator
function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        return "Over 100";
    }
    if (val > 10) {  // Change this line
        return "Over 10";
    }
    return "10 or Under";
}
testGreaterThan(10);

//Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }
    if (val >= 10) {  // Change this line
        return "10 or Over";
    }
    return "Less than 10";
}
testGreaterOrEqual(10);

//Comparison with the Less Than Operator
function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }
    if (val < 55) {  // Change this line
        return "Under 55";
    }
    return "55 or Over";
}
testLessThan(10);

//Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
testLessOrEqual(10);

//Comparisons with the Logical And Operator
function testLogicalAnd(val) {
    // Only change code below this line
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    // Only change code above this line
    return "No";
}
testLogicalAnd(10);

//Comparisons with the Logical Or Operator
function testLogicalOr(val) {
    // Only change code below this line
    if (val < 10 || val > 20) {
        return "Outside";
    }
    // Only change code above this line
    return "Inside";
}
testLogicalOr(15);

//Introducing Else Statements
function testElse(val) {
    let result = "";
    // Only change code below this line
    if (val > 5) {
        result = "Bigger than 5";
    }else{
        result = "5 or Smaller";
    }
    // Only change code above this line
    return result;
}
testElse(4);

//Introducing Else If Statements
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }else if (val < 5) {
        return "Smaller than 5";
    }else{
        return "Between 5 and 10";
    }
}
testElseIf(7);

//Logical Order in If Else Statements
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
orderMyLogic(7);

//Chaining If Else Statements
function testSize(num) {
    // Only change code below this line
    if(num < 5){
        return "Tiny";
    }else if(num < 10){
        return "Small";
    }else if(num < 15){
        return "Medium";
    }else if(num < 20){
        return "Large";
    }else if(num >= 20){
        return "Huge";
    }else
        return "Change Me";
    // Only change code above this line
}
testSize(7);

//Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1){
        return names[0]
    }else if (strokes <= par - 2){
        return names[1]
    }else if(strokes == par - 1){
        return names[2]
    }else if(strokes == par){
        return names[3]
    }else if(strokes == par + 1){
        return names[4]
    }else if(strokes == par + 2){
        return names[5]
    }else if(strokes >= par + 3){
        return names[6]
    }else
        return "Change Me";
    // Only change code above this line
}
golfScore(5, 4);

//Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    // Only change code above this line
    return answer;
}
caseInSwitch(1);

// Adding a Default Option in Switch Statements
function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    // Only change code above this line
    return answer;
}
switchOfStuff(1);

//Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        // Only change code above this line
    }return answer;
}
sequentialSizes(1);

//Replacing If Else Chains with Switch
function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    // Only change code above this line
    return answer;
}
chainToSwitch(7);
//Returning Boolean Values from Functions
function isLess(a, b) {
    // Only change code below this line
    return ;
    // Only change code above this line
}
isLess(10, 15);

//Return Early Pattern for Functions
// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 | b < 0){
        return undefined;
    }else{
        // Only change code above this line
        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }
}
abTest(2,2);

//Counting Cards
let count = 0;
function cc(card) {
    // Only change code below this line
    if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6){
        count += 1;
    }else if (card == 7 || card == 8 || card == 9) {
        count += 0;
    }else if (card == "10" || card == "J" || card == "Q" || card == "K" || card == "A"){
        count += -1
    }else{
        return "Change Me";
    }
    if(count > 0){
        return `${count}` + ' Bet';
    }else{
        return `${count}` + ' Hold';
    }
    // Only change code above this line
}
cc(2); cc(3); cc(7); cc('K'); cc('A');


//Build JavaScript Objects
const myDog = {
    // Only change code below this line
    name: "Garold",
    legs: 3,
    tails: 1,
    friends: ["Jessi", "Lamar", "Sarah"]
    // Only change code above this line
};

//Accessing Object Properties with Dot Notation

// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

//Accessing Object Properties with Bracket Notation
// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line

//Accessing Object Properties with Variables
// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

//
// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog["name"] = "Happy Coder"
//Add New Properties to a JavaScript Object
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof"

//Delete Properties from a JavaScript Object
// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
// Only change code below this line
delete myDog["tails"]

//Using Objects for Lookups
// Setup
function phoneticLookup(val) {
    let result = "";

    // Only change code below this line
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot":"Frank"
    }
    result = lookup[val];
    // Only change code above this line
    return result;
}

phoneticLookup("charlie");

//Testing Objects for Properties
function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)){
        return obj[checkProp];
    }else{
        return "Not Found";
    }
    // Only change code above this line
}

//Manipulating Complex Objects
const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "DDT",
        "title": "Blizzard",
        "release_year":1991,
        "formats": ["CD", "mp3", "avi"]
    }
];

//Accessing Nested Objects
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
const gloveBoxContents = myStorage.car.inside["glove box"];

//Accessing Nested Arrays
const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list[1];

//Record Collection
