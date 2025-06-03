// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//arrow function
( (name) => {
    //un named iffie
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')