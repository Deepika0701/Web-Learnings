const root=document.querySelector('.root');
const btn=document.querySelector('button');


function createItem(item){
    const card=document.createElement('div');

    card.classList.add('card')

    //photo
    const photo=document.createElement('img');
    photo.src=item.thumbnailUrl;
    //title
    const title=document.createElement('h4');
    title.innerHTML=item.title;
    card.appendChild(photo);
    card.appendChild(title);
    root.appendChild(card);
}


function displayImages(items){
    items.forEach((item)=>{
        createItem(item)
    })


}

    
btn.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then(res=>res.json())
    .then(items=>{
        displayImages(items);
    })
})
