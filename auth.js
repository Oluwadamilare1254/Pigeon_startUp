const btn = document.getElementById('click');
const logIn = document.getElementById('logIn');
const dynamicText = document.getElementById('dynamicText')

console.log(btn)
console.log(dynamicText)

btn.addEventListener('click', ()=>{
window.location.href='email.html'
})

// logIn .addEventListener(
//     'click',()=>{
// dynamicText.textContent = 'Welcome Back'
//     }
// )