

const btn= document.querySelector('button')
const body= document.querySelector('body')
const a=['red','yellow','orange','green','purple','cyan','orangered']
let i=0
btn.addEventListener('click',() => {

    body.style.background=`${a[i]}`
    i++;
    if(i==a.length){i=0}
})
