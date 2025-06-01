tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "harsh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email: "xyz@gmail.com",
    fullname:{
        userfullname:{
            firstname: "harsh Vardhan",
            lastname: "Gauttam",
        }
    }
}

// console.log(regularUser.fullname.userfullname?.firstname);

//Concatination of objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {...obj1,...obj2} //using spread operator (most used)
const obj3 = Object.assign({},obj1,obj2) //using assign method of objects {}this is target other are sources

// console.log(obj3);

//Data base and Objects,array relations :

const users = [
    {
        id : 1,
        email : "asd@jef",
    },
    {
        id : 2,
        email : "asd@jef",
    },
    {
        id : 3,
        email : "asd@jef",
    }
]

// console.log(users[0].id);
// console.log(tinderUser);
// console.log(Object.values(tinderUser));//return array of values
// console.log(Object.keys(tinderUser));//return array of keys
// console.log(Object.entries(tinderUser));//return array of key value pair

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course ={
    courseName : "JS",
    price : 100,
    courseInstructor : "harsh"
}

//  Destructuring of objects 
const {courseInstructor : instructor} = course

console.log(instructor);







