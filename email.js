const userEmail = document.getElementById('email');
const emailSubmit = document.getElementById('emailSubmit');



emailSubmit.addEventListener('click', (e) => {
    localStorage.removeItem('userValue');
    // localStorage.removeItem('userChoice')

   
    localStorage.setItem('signupMethod', 'email');
    localStorage.setItem('emailValue', userEmail.value.trim())

    e.preventDefault()
    window.location.href = 'OTP.html';
})


