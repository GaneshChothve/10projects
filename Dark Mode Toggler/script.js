

const btn= document.querySelector('.btn')

const body=document.querySelector('body')

body.style.background='white'
btn.addEventListener('click',() => {
    console.log('hi')
    let k=body.style.backgroundColor
    if(k=='white'){
        body.style.backgroundColor='black'
        body.style.color='white'
        btn.style.background='white'
    }
    else{
        body.style.background='white'
        body.style.color='black'
        btn.style.background='blueviolet'
    }
})