const { use } = require("react");

console.log("abhishek");
//"use strick" //treat all js code asnewer version 
// alert(3 + 3 ) //weare using node js, not browser

let name = "ved"
let age = 16
let isLoggedIn = false

//number
//string => " "
//bigint
//boolean
//null => stand alone value
//undefined => abhi value assign nnhi hua hai
//symbol

//object
console.log(typeof age);

// null ka type of is object hai 
// undefine ka type of undefine hota hai

// # primitive

// 7 types : string, number, boolean, null, undefined , symbol, big int

const score = 100;
const userEmail = 20;
const userEmaill = undefined;

//# reference type--> non primitive types
// array, object(browser events), function

/* let value = 42; // 'value' holds a number
value = "Hello"; // Now it holds a string
value = true; // Now it holds a boolean
JavaScript is a dynamically typed language, 
meaning variables do not have fixed types and can hold 
different types of values throughout their lifetime */

// defining of array

const heroes = ["saktiman", 'spiderman', "robot"];
console.log(heroes);
console.log("She said, \"Hello!\""); // ✅ Escaped double quotes
console.log('She said, "Hello!"');  // ✅ No escaping needed

// defining the objects
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
} 


/* variables and their type of results
undefined =  undefined
null = object
boolean = boolean 
number = number 
string = string


Key Points About typeof and Objects
Regular Objects → typeof {} returns "object".

Arrays → typeof [] also returns "object" (since arrays are a type of object).

Functions → typeof function() {} returns "function" (functions are technically objects but have a special type).

null Quirk → typeof null returns "object" (this is a historical bug in JavaScript).

Instances of Classes → typeof new Date() returns "object" */

//  --------------------------

/* console.log(new Date() instanceof Date); // Output: true
Your code is correct and will return true because instanceof checks if an object is an instance of a specific constructor.
new Date() creates a Date object.

instanceof Date checks whether new Date() was created using the Date constructor.

Since Date.prototype is in the prototype chain, it correctly returns true.


console.log([] instanceof Array);    // ✅ true
console.log({} instanceof Object);   // ✅ true
console.log(() => {} instanceof Function); // ✅ true
console.log(new Map() instanceof Map); // ✅ true
console.log(new Date() instanceof Object); // ✅ true (since all objects inherit from Object)
*/


// ++++++++++++++++++++++++++++++++++++++++++++++++++++


//stack(primitive), heap(non primitive)
//stackscreates the copy of the data given, any changes applied on the function would change the value of copy (original value of the function remain the same)
// heap basically non primitive data type ---> points on the reference of the value , any change in the value would directly impact the orignal vale 
// as the reult the value of heap changes

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chai and code"

// output for myYoutubename  = "hiteshchouddharydotcom" and anothername = "Chai and code"


let userOne = {
    email: "user@googledotcom",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "hitesh.dot"

console.log(userOne.email); // o/p--> "hitesh.dot"
console.log(userTwo.email); // o/p--> "hitesh.dot"
// same output as it points to same refernce / position and does not work on the copy of the value

