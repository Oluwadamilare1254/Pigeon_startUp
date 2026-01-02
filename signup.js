const userNum  = document.getElementById('userNum');
const numSubmit = document.getElementById('numSubmit');

numSubmit.addEventListener('click',(e)=>{
    e.preventDefault()
  localStorage.removeItem('emailValue');

localStorage.setItem('signupMethod', 'number');
localStorage.setItem('userValue', userNum.value.trim());

window.location.href = 'OTP.html'
})