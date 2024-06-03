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


// const myBtn=document.querySelector('#myBtn')

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

//template literals aka backticks
// const firstName='john'
// const lastName='doe'

// console.log(firstName+" "+lastName)

//in template literals it writes the thing in the mnner as we write it in backticks

// const message=`hello ${firstName}
// world`
// console.log(message)

// --------------------------------------
// Enhanced object literals
// const product={
//     name:'mobile',
//     price:100
// }
// console.log(product)

// if we want our key to be dynamic 
//computed property keys
// const keyName='name';
// const product={
//     [keyName]:'mobile',
//     price:100
// }
// console.log(product)

//method defintion shorthand
// const product={
//     buy:function(){
//         console.log('bought')
//     }
// }

//in shorthand you can remove the function keyword and colon also
// const product={
//     buy(){
//         console.log('bought')
//     }
// }
// product.buy()


//property shorthand
// const accessToken="asdfgbhvjb"
// const refreshToken='sdfghmjm'

// const user={
//     accessToken:accessToken,
//     refreshToken:refreshToken
// }

// console.log(user)

//if key and value names are same

// so the enhancement is
// const user={
//     accessToken,
//     refreshToken
// }
// console.log(user);


//Destructuring 
// const user={
//     name:'john',
//     age:27,
// }

// console.log(user.name);
// console.log(user.age);
// to get the user properties we need to always mention the user object 
// in destructuring 
// const {name,age}=user;
// console.log(name);
// console.log(age);

// const {name:fullName,age}=user;//alias

//we can use the name using fullName by passing alias
// console.log(fullName);


// const data=['Rakesh',30,'Engineer'];
// console.log(data[0])

// const[name,age,profession]=data; //array destructuring
// console.log(name)

// example of array destructuring 
// const [count,setCount]=useState()

//Default parmaeters

// const userRegister=(name,password,image)=>{
    //earlier we used to do like this to set default parameters
//     const img=image||'test.png'
// console.log(name,password,img);
// }

// userRegister('Rakesh','secret','test.png');
// userRegister('Rakesh','secret',); 


//in es6
// const userRegister=(name,password,image='test.png')=>{
// console.log(name,password,image);
// }

// userRegister('Rakesh','secret',);


//spread operator helps in cloning
// const languages=['c','cpp','js'];

// const newLanguages=[...languages]
// const newLanguages=['tsx',...languages]
// const newLanguages=[...languages,'tsx']
// console.log(newLanguages);

//we can even clone the object
// const settings={
//     volume:10,
//     brightness:80,
// };
// const newSettings=settings //here it is copying by the reference

// console.log(newSettings)//it referencing to the same object settings
// console.log(settings===newSettings)
// newSettings.volume=20;
// console.log(settings.volume)

//cloning the settings object using spread operator
// const newSettings={...settings,contrast:50};
// const newSettings={...settings,volume:50};//we can even override
// console.log(newSettings);

//Rest operator(...)

// const addItems=(a,b,c)=>{
//     console.log(a+b+c);
// }

const addItems=(...items)=>{
   
}
addItems(3,2,4);

//for of loop
//array,string,object,set,map
const numbers=[2,4,5,7];
for(const num of numbers)
    {
        console.log(num);
    }
 
    const language='javascript';
    for(const char of language){
        console.log(char);
    }

    const person={
        name:'rakesh',
        city:'moscow',
        brand:'apple',
    };

    //generally object is not iterable 
    // for(const entry of person){
    //     console.log(entry)
    // }
// so we are making it iterable

for (const entry of Object.entries(person)){
    console.log(entry)
}


