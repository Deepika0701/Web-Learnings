// const ticket=new Promise(function(resolve,reject){
//     const isBoarded=false;
//     if(isBoarded){
//         resolve('You are not in the flight')
//     }
//     else{
//         reject('your flight has been cancelled')
//     }
// })

// ticket.then((data)=>{
//     console.log("wohoo", data);
// }).catch((data)=>{
//     console.log("oh no", data);
// }).finally(()=>{
//     console.log("i will always be executed");
// })


function getCheese(){
return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cheese="CHEESE";
            resolve(cheese);
            // reject('bad cheese');
        },2000);
    })
}

function makeDough(cheese){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dough=cheese+" DOUGH";
            reject('bad cheese');
            // resolve(dough);
        },2000);
    })
}

function bakePizza(dough){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pizza=dough+" PIZZA";
          
            resolve (pizza);
        },2000);
    })
}


// getCheese().then((cheese)=>{
//     console.log("here is the cheese",cheese);
//     return makeDough(cheese);
// }).then((dough)=>{
//     console.log("here is the dough", dough);
//     return bakePizza(dough);
// }).then((pizza)=>{
//     console.log("here is the pizza", pizza);
// }).catch((data)=>{
//     console.log('error ocurred', data);
// }).finally(()=>{
//     console.log("process ended");
// })


//ASYNC AWAIT
// we use async await with the functions that are asynchronus in nature

// async function orderPizza(){
//     const cheese= await getCheese();
//     console.log("here is the cheese",cheese);
//     const dough= await makeDough(cheese);
//     console.log("here is the dough", dough);
//     const pizza =await bakePizza(dough);
//     console.log("here is the pizza", pizza);
// }

// to handle error in above function
async function orderPizza(){
    try{
        const cheese= await getCheese();
        console.log("here is the cheese",cheese);
        const dough= await makeDough(cheese);
        console.log("here is the dough", dough);
        const pizza =await bakePizza(dough);
        console.log("here is the pizza", pizza);
    }catch(err){
        console.log('error occured');
    }

}

orderPizza();