
btn= document.getElementsByTagName('button')

music =['boo.mp3','gasp.mp3','tada.mp3','victory.mp3','wrong.mp3']
let p=new Audio()

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click',() => {
        p.pause()
        const k=new Audio('sounds/'+music[i])
        k.play()
        p=k
        console.log('hi')
    })
}