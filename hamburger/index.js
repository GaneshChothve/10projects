

const btn= document.getElementsByClassName('view1')[0]
const drag=document.getElementsByClassName('view2')[0]
let flag=0
btn.addEventListener('click', () => {

    if(flag==0){
        btn.style.marginLeft= `${76}%`
        drag.style.marginLeft= `${80}%`
        flag++
    }
    else{
        btn.style.marginLeft= `${90}%`
        drag.style.marginLeft= `${100}%`
        flag=0
    }
})