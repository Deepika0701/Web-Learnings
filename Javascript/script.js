//DOM manipulation : Document object model
// DOM manipulation refers to the process of dynamically modifying the structure, content, or style of a web page's Document Object Model (DOM) using scripting languages like JavaScript. 

//1.getElementById
// const heading=document.getElementById('heading');
// console.log(heading);

//2.getElementsByTagName
// const heading=document.getElementsByTagName('h1');

//3.getElementsByClassName
// const heading=document.getElementsByClassName('head');

//4. querySelector
// const heading=document.querySelector('.head')
//4. querySelectorAll
// const heading=document.querySelectorAll('.head')


//Traverse DOM
// 1.parent Node
// const heading=document.querySelector('.heading');
// const parent=heading.parentNode;
// console.log(parent);

//2. childNodes
// const parent=document.querySelector('.parent');
// console.log(parent.childNodes)

// 3.nextElementSibling
// const heading=document.querySelector('.heading');
// console.log(heading.nextElementSibling)

// 4.previousElementSibling
// const sheading=document.querySelector('h3');
// console.log(sheading.previousElementSibling)

// Manipulation 
// const heading=document.querySelector('.heading');
// heading.innerHTML='Web dev is amazing';

// heading.style.color='red '
// heading.style.fontSize='100px'

// heading.classList.add('title');
// heading.classList.remove('heading')


//create elements

// const heading=document.createElement('h1');
// heading.innerHTML='js is amaxing';
// const parent=document.querySelector('.sample')
// parent.appendChild(heading)
//appendChild adds the element to the end

//so if you want to add any element befor the iother element you can use insertAdjacentElement

// const heading=document.createElement('h1');
// heading.innerHTML='js is amaxing';
// const parent=document.querySelector('.sample')
// parent.appendChild(heading)

// const subHead=document.createElement('h3');
// subHead.innerHTML='hyee byee';
// heading.insertAdjacentElement('beforebegin',subHead)
// heading.insertAdjacentElement('afterend',subHead)

// console.log(heading);

// const button=document.querySelector('#bttn');
// const header=document.querySelector('#header')

// button.addEventListener('click',(event)=>{
//     header.style.color='purple'
//     header.style.fontSize='100px'
//     console.log('button clicked')
//     console.log(event);
// })


