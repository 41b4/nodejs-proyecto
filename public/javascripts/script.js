console.log('holi')

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