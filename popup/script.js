
const btn =document.querySelector('button')
const popup = document.querySelector('.con')
const close = document.getElementsByClassName('cross')[0]

btn.addEventListener('click', () => {
    btn.classList.add('active')
    popup.classList.add('active')
    document.getElementsByTagName('body')[0].style.background='#aaa'
})

close.addEventListener('click',() => {
    btn.classList.remove('active')
    popup.classList.remove('active')
    document.getElementsByTagName('body')[0].style.background='#fff'
})