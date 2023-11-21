// Variaveis de controle
/* let randomNumber =   Math.round(Math.random() * 10) 
let xAttempts = 1 */

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const imgbutton = document.querySelector(".img")
const cookieOpen = document.querySelector('.screen2 button')
// Event

imgbutton.addEventListener('click',handleClick)
cookieOpen.addEventListener('click',handleClick)
function togggleScreen(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function handleClick(){
  togggleScreen()
}