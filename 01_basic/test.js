console.log("hitesh");
const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);
console.log(id);
console.log(anotherid);
console.log(typeof id);
console.log(typeof anotherid);

/* Symbols are a powerful way to create unique property keys in objects, 
ensuring they don't accidentally collide with existing properties. 
Here's how they interact with objects:

const privateID = Symbol('privateID'); // Unique, hidden symbol
const globalID = Symbol.for('sharedID'); // Shared across modules

const account = {
    [privateID]: 98765,
    [globalID]: "ACC-001",
    username: "abhishek_dev"
};

console.log(Object.keys(account)); // ['username']
console.log(Object.getOwnPropertySymbols(account)); // [ Symbol(privateID), Symbol(sharedID) ]
console.log(Symbol.keyFor(globalID)); // 'sharedID'
Regular Symbol() hides properties from common object iterations (Object.keys()).

Symbol.for() allows retrieval by name, making it ideal for cross-module communication

-----------------------------------------------------------

Normal Keys in Loops:
const user = { name: "Abhishek", age: 25 };

console.log(Object.keys(user)); // ['name', 'age']

for (let key in user) {
    console.log(key); // name, age
}

Object.keys() aur for...in loops har property ko dikhate hain.


-----------------------------------------

Symbols as Hidden Keys:

const secretKey = Symbol('privateID');

const user = {
    name: "Abhishek",
    age: 25,
    [secretKey]: 12345
};

console.log(Object.keys(user)); // ['name', 'age']
console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(privateID) ]


Symbols are invisible in Object.keys() aur loops me bhi nahi aate! Lekin agar specifically Object.getOwnPropertySymbols() use kare, to symbol keys mil sakte hain.
*/
