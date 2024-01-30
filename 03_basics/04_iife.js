// Immediately Invoked Function Expressions (IIFE)
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


//global scope ke pollution is dikkat hoti hai kahi baar toh us global scope ke variables ko or pollution ko hatane ke liye iife ka use kiya hai
