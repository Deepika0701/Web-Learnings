// function register(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Register end')
            
//             resolve('success');
//         },1000)
//     });
// }

// function sendEmail(){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
     
//         // return reject('error while sending mail')
//         console.log('Email end')
//         resolve();
//     },1000)
// })
// }

// function login(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('login end')  
//             resolve();
//         },3000)
//     })
// }

// function getUserData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{    
//             console.log('got user data')
//             resolve();
//         },1000)})



// }

// function displayUserData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{    
//             console.log('user data displayed')
//             resolve();
//         },1000)})
// }
// // register(function(){
// //     sendEmail(function(){
// //         login(function(){
// //             getUserData(function(){
// //                 displayUserData();
// //             });

// //         }); 

// //     });

// // });

// //promises
// // register().then(sendEmail).then(login).then(getUserData).then(displayUserData).catch((err)=>{
// // console.log('error ', err);
// // });


// //async await

// async function authenticate(){
//    const message= await register();
//     await sendEmail();
//     await login();
//     await sendEmail();
//     await getUserData();
//     await displayUserData();
// }

// async function authenticate(){

//     try{
//         const message= await register();
//         await sendEmail();
//         await login();
//         await sendEmail();
//         await getUserData();
//         await displayUserData();
//         console.log(message)
//     }catch(err){
//         console.log(error)
//         throw new Error();
//     }
 
// }
// authenticate().then(()=>{
//     console.log('all set')
// })
// // .catch((err)=>{
// //     console.log(err)
// // });
// console.log('other application work')