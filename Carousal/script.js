const bg= document.getElementsByClassName('imgs')[0]

let i=1

setInterval(change,2000)
function change(){

    bg.style.transform= `translateX(${-400*i}px)`
    i++
    if(i==3){i=0}
}