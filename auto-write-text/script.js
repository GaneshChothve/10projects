
const text = document.querySelector('div');

let txt='Hi There, My name is Ganesh Chothve!'
let i=0, s=''

let id=setInterval(add, 100)
function add() {
    s+=txt[i]
    text.innerHTML=s;
    i++;
    console.log(i)
    if(i>txt.length-1){
        s=''
        i=0
    }
}