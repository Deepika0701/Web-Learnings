//let const
// var productName='Laptop';

// var age=18;
// if(age>=18)
//     {
//         var driving=true;
//     }

//     console.log(driving);

//  var keyword has functional scope 
// function sample(){
//     var num=1;
// } 
// console.log(num);  //give reference error function is not defined


// var product='phone'
// var product='tablet'
// console.log(product)
//var has the ability to override 

// let product='phone'
// let product='tablet'//will give syntax error as product is already been declared
// console.log(product);


// when you declare a variable using var keyword outside of any function in JavaScript, it becomes a property of the global object, which in a browser environment is typically the window object. This means that the variable is accessible globally throughout your JavaScript code.
// var globalVar = 10;

// console.log(window.globalVar);


// but this problem can be resolved using let it doesnot set to windows property


// Variables declared with var are hoisted to the top of their scope and initialized with a value of undefined. This means you can access the variable before it's declared in your code, but its value will be undefined.
// console.log(x); // Outputs: undefined
// var x = 10;

// Variables declared with let and const are also hoisted to the top of their scope, but unlike var, they are not initialized until their actual declaration is reached in the code. Attempting to access these variables before their declaration results in a ReferenceError.
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 20;

// const age={
//     years:19,
// }
// age.years=20;
// console.log(age)
//you can modify the value of object but not of the variable with const


//arrow functions
// function greet(){
//     console.log('gm')
// }
// greet();
// const greet=()=>{
//     console.log('gm');
// }
// greet();

//problem resolved by arrow function

// const addition=(a,b)=>{
//     console.log(a+b)
// }
// addition(4,5);

//make it one liner
// const addition=(a,b)=>console.log(a+b)

// console.log(this);//here this will refer to a window object

// understanding the use of this keyword in function 

//in this function this refers to the shop object because the function is called as a method of the shop object
// const shop={
//     purchase: function(){
//         console.log(this);
//     },
// };

//arrow functions dont have their own this binding instead they inherit this value from the enclosing lexical context
// this inside the arrow function will refer to the global object (usually window in a browser environment, or global in Node.js)
// const shop={
//     purchase:()=>{
//         console.log(this);
//     },
// };

// shop.purchase();


const myBtn=document.querySelector('#myBtn')

// const shop={
//     price:100,
//     buy:function(){
//         myBtn.addEventListener('click',function(){
//             console.log('I spent'+ this.price);
//         })
//     },
// } //in this example this is refering to button object and the button object does not have any property of price

//so in this example we are storing this
// const shop={
//     price:100,
//     buy:function(){
//         const self=this // we are storing the main object shop
//         myBtn.addEventListener('click',function(){
//             console.log('I spent '+ self.price);
//         })
//     },
// }


//so the above problem is resolved by arrow function
// const shop={
//         price:100,
//         buy:function(){
//             myBtn.addEventListener('click',()=>{
//                 console.log('I spent '+ this.price); //in arroe function it uses the object of parent function .. so the parent function is referring to object shop 
//             })
//         },
//     }

// shop.buy();



