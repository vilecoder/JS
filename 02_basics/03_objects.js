//object literals:
const mySym = Symbol("hvg")

const user ={
    name:"harsh",
    email : "hvg123@mail.com",
    id : 303,
    [mySym]: "harsh",
    
}
// console.log(user.email);
// console.log(user["id"])
// console.log(typeof user[mySym]);
// console.log(typeof user[mySym]);
console.log(typeof mySym);

user.greetings = function(){
    console.log("Hello harsh");
}

user.greetingsTwo = function(){
    console.log(`Hello ,${this.name}`);//imp
}

// console.log(user.greetings());
// console.log(user.greetings);
console.log(user.greetingsTwo());



