// arrays

// basic defining of the arrys

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr);

const myHerors = ["abhi","abhi2","abhi3"]
console.log(myHerors);

const myArr2 = new Array(1, 2, 3 ,4)
console.log(myArr[1]);

myArr.push(8)
myArr.pop(0)

myArr.unshift(9) // --> push the element at the beginning
//shifts the values from beginning as it adds the elemem=nts at the beginning
// unshift can be time consuming and for large data it would be time consuming

myArr.shift() //--> pop the element from the beginning

console.log(myArr.includes(9)); //checks whether 9 is present or not
console.log(myArr.indexOf(3)); //returns the index if element is present

// slice and splice 
console.log("A ",myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B",myArr);


 
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);