

const btn= document.getElementsByTagName('button')[0]

const box=document.getElementsByClassName('container')[0]

btn.addEventListener('click',() => {

    const notif=document.createElement('div')
    notif.classList.add('toast')
    notif.innerHTML='This challenge is crazy'

    box.appendChild(notif)

    setTimeout(() => {
        notif.remove()} , 3000)

})