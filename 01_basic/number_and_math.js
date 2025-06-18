const  score = 400;
console.log(score);

const balance  = new Number(900)
console.log(Number);  // prints the Number Constructor Function
console.log(balance); // o/p= 900
console.log(balance.toString); // we can define / use object function
console.log(balance.toString().length); //various object function are used
console.log(balance.toFixed(2)); //tofixed are used to  fixed the values after decimal 
// o/p ==> 900.00

const otherNumber = 123.456
console.log(otherNumber.toPrecision(2));

// -------------------------
console.log(Math.random()); //used to generate the random numbers b|w 0 & 1
console.log((Math.random()*10) + 1); //number genrated would be now 1 & 10 min--> 1 would occur

//########################################
// when you are given a range btween max and min
console.log(Math.floor(Math.random()* (max - min +1)) +1 );


//########################################