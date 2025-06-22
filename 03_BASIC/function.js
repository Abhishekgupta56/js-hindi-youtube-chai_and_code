function addTwonumber(num1, num2){
    return num1 + num2
}

console.log(addTwonumber(3,4));
  
function loginUsermMessage(userName){
    return `${userName} just logged in`

}

console.log(loginUsermMessage("hitesh"));

console.log(loginUsermMessage()); // when no parameter is passed then it reults in undefined

//rest operator

function calculateCartPrice(num11){
    return num11
}

console.log(calculateCartPrice(200,300,400,2000)); // takes only value 200 

// as a result we use rest opertor

function calculateCartPrice(...num11){
    return num11
}

// o|p---> [ 200, 300, 400 ] puts the multiple value in array 

function calculateCartPrice(val1, val2,...num11){
    return num11
}
// o|p -----> [ 400, 2000 ]

//----------------------------------------------------

const user = {
    username : "hitesh",
    price : 199
}

function handleObject(anyobject){
console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);

}

handleObject(user) // calling of the function

// use can directly pass the object to the function

handleObject({
    username : "Abhishek",
    price : 199
})

// use can also define the array as specified