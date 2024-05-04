//scenario
/*
1.Register
2. Send welcome email
3. Login
4. Get user data
5. Display user data
 */
function waitForThreeSeconds(){
    let ms=3000+new Date().getTime();
    while(new Date()<ms){}
}

function register(callback){
    // waitForThreeSeconds();
    setTimeout(()=>{
        console.log('Register end')
        callback();
    },1000)

}

function sendEmail(callback){
    // waitForThreeSeconds();
    setTimeout(()=>{
        console.log('Email end')
        callback();
    },1000)

}

function login(callback){
    // waitForThreeSeconds();
    setTimeout(()=>{
        console.log('login end')  
        callback();
    },3000)
 

}

function getUserData(callback){
    // waitForThreeSeconds();
    setTimeout(()=>{    
        console.log('got user data')
        callback();
    },1000)


}

function displayUserData(){
    setTimeout(()=>{
        console.log('user data displayed')
    },1000)

}

// callback-hell 
// register(function(){
//     sendEmail(function(){
//         login(function(){
//             getUserData(function(){
//                 displayUserData();
//             });

//         }); 

//     });

// });


// console.log('other application work')

// we can resolve the problem of nested callbacks using promises 