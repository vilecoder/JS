//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(for primitive data type) and Heap(for non primitive data type : arr,fn,obj)

let value = 1234
let anotherValue = value // a copy of variable value given to anotherVAlue
anotherValue =333
// console.log(anotherValue);
// console.log(value);




let userOne = {
    email : "harshvardhan@xyz",
    numb : "12345",
}

let userTwo = userOne;
userTwo.numb = "22344"

console.log(userOne.numb);
console.log(userTwo.numb);
