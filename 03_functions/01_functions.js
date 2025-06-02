// function CalculateCartPrice(...num1){
//     return num1;
// }

// console.log(CalculateCartPrice(100,200,300));

function CalculateCartPrice( n1, n2,...num1){
    return num1;
}


// console.log(CalculateCartPrice(100,200,300));

//function for an object

const userDetails ={
    username:123,
    orderPrice : 600,
}

function greeting(anyobject){
    console.log(`hello ${anyobject.username} your order price is ${anyobject.orderPrice}`);
    
}

greeting(userDetails)
         //OR
greeting({
    username:"harsh",
    orderPrice : 777,
})

const myArr = [1,2,3,4]
function FirstElement(getarray){
    return getarray[0]
}

console.log(FirstElement(myArr));


