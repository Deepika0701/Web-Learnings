//Objects in javascript
// In JavaScript, almost "everything" is an object.

// Booleans can be objects (if defined with the new keyword)
// Numbers can be objects (if defined with the new keyword)
// Strings can be objects (if defined with the new keyword)
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are always objects
// All JavaScript values, except primitives, are objects.
// Objects are Variables
// JavaScript variables can contain single values:
// Object values are written as name : value pairs (name and value separated by a colon).


//Variables
//var,let,const 
// let language='javascript';
// console.log(language);
// const a=60;
// a=30;

//fucntion scope
// var lang='java';

// if(true)
// {
//     var age=25;
// }
// console.log(age);

//block scope
// if(true){
//     let age=25;
// }
// console.log(age);

// if(true){
//     const age=25;
// }
// console.log(age);


//Hoisting: Hoisting is JavaScript's default behavior of moving declarations to the top.
//Var keyword
// console.log(greeting);// output:undefined
// var greeting='hello';



//const and let keywords
// Variables defined with let and const are hoisted to the top of the block, but not initialized.
// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
// Using a let variable before it is declared will result in a ReferenceError.
// The variable is in a "temporal dead zone" from the start of the block until it is declared:
// console.log(greeting);// output:Reference error :cannot access greeting before intitialization
// let greeting='hello';

// JavaScript Initializations are Not Hoisted
// var x = 5; // Initialize x
// var y = 7; // Initialize y

// console.log(x);
// console.log(y)

// var x = 5; // Initialize x
// console.log(x);
// console.log(y)
// var y = 7; // Initialize y