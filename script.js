let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listitemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector('.carousel .thumbanail');

nextDom.onclick = function(){
    showslider('next');
}
prevDom.onclick = function(){
    showslider('prev');
}

let timerunning = 3000;
let timeautonext = 7000;
let runtimeout;
let runautorun = setTimeout(()=>{
    nextDom.click();
},timeautonext);
function showslider(type){
    let itemslider = document.querySelectorAll('.carousel .list .item')
    let itemthumbnail = document.querySelectorAll('.carousel .thumbnail .item')

    if(type == 'next'){
        listitemDom.appendChild(itemslider[0]);
        thumbnailDom.appendChild(itemthumbnail[0]);
        carouselDom.classList.add('next');
    }
    else
    {
        let positionlastitem = itemslider.length-1;
        listitemDom.prepend(itemslider[positionlastitem]);
        thumbnailDom.prepend(itemthumbnail[positionlastitem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runtimeout);
    runtimeout = setTimeout(()=>{
 
        carouselDom.classList.remove('next')
        carouselDom.classList.remove('prev')

    },timerunning)

    clearTimeout(runautorun);
    runautorun =setTimeout(()=>{
        nextDom.click();

    },timeautonext)
}