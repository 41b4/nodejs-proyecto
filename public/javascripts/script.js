console.log('holi')

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

console.log(document.cookie)
var element = document.body;
if (document.cookie=='theme=dark'){
    element.classList.add("theme--dark"); 
}else{
     element.classList.remove("theme--dark")
}


let colors=['#ff8552','#D30C7B','#7eb2dd','#f9c80e','#48bf84','#a1fcdf']
let x = document.getElementsByClassName('noticia')

for( let i=0; i<x.length; i++){
    let random=Math.floor(Math.random()*colors.length)
    x[i].style.backgroundColor=colors[random]
}
let news= document.getElementById('noticiaAdd')
news.style.display='none'
let addNews=()=>{
    if(news.style.display=='none'){
        news.style.display='flex'
        console.log('muestro')
    }else if (news.style.display=='flex'){
        news.style.display='none'
        console.log('oculto')
    }
}
