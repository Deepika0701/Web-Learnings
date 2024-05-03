// const languages=['javascript','python','c'];
//length
// console.log(languages.length);

// console.log(languages[1]);

//to add items in array
// languages.push('dart');
// console.log(languages)

//to insert element in the start
// languages.unshift('java');
// console.log(languages)

// to remove element from last 
// console.log(languages.pop()) // pop method returns the popped element


//to remove first element
// languages.shift();
// console.log(languages)

// const actors=[
//     {
//         name:'Actor1',
//         payment:100
//     },
//     {
//         name:'Actor2',
//         payment:120
//     },
//     {
//         name:'Actor3',
//         payment:180
//     },
//     {
//         name:'Actor4',
//         payment:200
//     }
// ]

// for(let i=0;i<actors.length;i++)
// {
//     console.log(actors[i]);
// }

// actors.forEach((actor)=>{
// console.log(actor)
// })

// for(let actor of actors ){
//     actor.payment=actor.payment-10;
//     console.log(actor)
// }

// console.log(actors);

//filter 
// const students=[
//     {
//         name:"student1",
//         marks:45
//     },
//     {
//         name:"student2",
//         marks:65
//     },
//     {
//         name:"student3",
//         marks:35
//     }
// ]

//filter method stores the elements which returns true
// const failed = students.filter((student)=>{
//     if(student.marks<45){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

//we can make the above statement one liner
// const failed= students.filter((student)=> student.marks<45);

// console.log(failed);


//Map

// const users=[
//     {
//         fname:'John',
//         lname:'Doe'
//     },
//     {
//         fname:'Jane',
//         lname:'Doe'
//     },
// ];

// //in map it stores the value that is returned by function 
// const finalUsers= users.map((user)=>{
//      return {
//         // fullname: user.fname+" "+ user.lname
//         fullname:`${user.fname} ${user.lname}`
//      };
// })

// console.log(finalUsers);

//Reduce
const movies=[
    {
        name:'movie1',
        budget:100
    },
    {
        name:'movie2',
        budget:150
    },
    {
        name:'movie3',
        budget:190
    }
]

// let total=0;
// movies.forEach((movie)=>{
//  total+=movie.budget;
// })
// console.log(total);


// Here by using reduce function we have initializied the value total within the function instead of declaring it before.
// const amount=movies.reduce((total,movie)=>{
//   total=total+movie.budget;
//   return total;
// },0)

// console.log(amount);

// Indexof 

// const admins=[2,1,5];

// const user={
//     name:'xyz',
//     id:6
// }

// const isAdmin = admins.indexOf(user.id)>-1;
// console.log(admins.indexOf(user.id))


//includes

// console.log(admins.includes(user.id))

// find 
// const users=[
//     {
//         name:'xyz',
//         id:2
//     },
//     {
//         name:'pqr',
//         id:2
//     },
//     {
//         name:'pqr',
//         id:3
//     },
   
// ]

// const myUser=users.find((user)=>{
//    return user.id === 3;
// })
// console.log(myUser);


// Sort
// const names=['John','Jane','Shyam','Ram','Sameer','Mansi'];
// names.sort();

// console.log(names);
// Splice 

// const names=['John','Jane','Shyam','Ram','Sameer','Mansi'];

// names.splice(2,2); //(from which index to delete, how many items to delete)
// console.log(names)









