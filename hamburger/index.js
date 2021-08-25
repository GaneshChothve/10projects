

const btn= document.getElementsByClassName('view1')[0]
const drag=document.getElementsByClassName('view2')[0]

btn.addEventListener('click', () => {
    btn.classList.toggle('active')
    drag.classList.toggle('active')
    k=btn.innerHTML
    if(k=='☰'){
        btn.innerHTML='X'
    }
    else{
        btn.innerHTML='☰'
    }
})
