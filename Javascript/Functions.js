//functions

// function login(username,password){
//     console.log(`${username} Logged in successfully`);
// }
// login('john');

// function upperCase(str){
//     // console.log( str.toUpperCase())
//     return str.toUpperCase();
// }
// upperCase('skdjh')

// function calculateArea(width,height){
//     const area=width*height;
//     return area;
// }

// const area=calculateArea(30);// output:NaN

// console.log(area);


// default parameters(its the part of ES6)
// function calculateArea(width,height=20){
//     const area=width*height;
//     return area;
// }


// Before es6 we tend to do it manually
// function calculateArea(width){

//     height=height===undefined?1:height;
//     const area=width*height;
//     return area;
// }

// calculateArea(30);


// variable scope 

// function downloads(){

//     const fileName='xyz.pdf';
//     console.log(fileName);
// }
// downloads();
// console.log(fileName);


//function expression and function declaration

//declaration
// function login(){

// }


// expression 
// const login=function(){
// console.log('log in');
// }
// login();

// callback 
// function formatText(text, formatCb){
//   return typeof formatCb === 'function'? formatCb(text): text;
//   toUpperCase();
// }
// const res = formatText('hello',function(text){
//   return text.charAt(0).toUpperCase()+text.slice(1);
// });
// console.log(res);

//IIFE(IMMEDIATELY INVOKED FUNCTION EXPRESSION)

// (function setup(){
//     console.log('setup done!')
// })();
// (function setup(){
//     console.log('setup done!')
// }());
// setup();


// Arrow functions 
// const login = function(){
//     console.log('Logged in');
// }
// const login=()=>{
// console.log('logged in')
// }
// login();

// const sum=(num1 , num2)=>{
//     return num1+num2;
// }

// const sum=(num1,num2)=> num1+num2;
// const res=sum(4,5);
// console.log(res)
