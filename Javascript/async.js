// Asynchronous Javascript(doesn't block the code)


//this is synchronus
// console.log('hello');
// console.log('JS');


// console.log('hui');
// //setTimeout is asynchronus fn
// setTimeout(function(){
// console.log('I am setTimeout')
// },3000);
// console.log('hee');


// console.log('Start');
// setTimeout(()=>{
//     console.log('I am timeout')
// },0)
// console.log('End');



// +--------+     +--------+    
// |        |     |        |
// | Call   |     |Web     |
// |Stack   |     |APIs    |
// +--------+     +--------+
// +--------+
// | call   |
// | back   |
// |queue   |
// +--------+

// Asynchronus function goes from call stack to webApis then to call back queue the to call stack 



//in this below example as setTimeout is asynchronus fn so it should be executed after 2 seconds but it took time of 7 seconds.. because at that time call stack is occupied with waitForSevenSeconds() so after that its executed
// function waitForSevenSeconds(){
//     let ms=7000+new Date().getTime();
//     while(new Date()<ms){}
// }

// setTimeout(()=>{
//     console.log('i am tiemout')
// },2000)

// waitForSevenSeconds();