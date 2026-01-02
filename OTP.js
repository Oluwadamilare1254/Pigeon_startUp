// const countDown = document.getElementById('countdown');                                                                                                                 
// // countDown.innerText = timer();
// let initialCount = 30;
// function timer(){
//     if(!initialCount==0){
//         countDown.innerText = initialCount  
//     }
//     else{
//         Validate()
//     }
//     initialCount = initialCount -1; 
// }
// setInterval(timer,1000)
// console.log(timer)

// function Validate(){
//     if(initialCount==0){
//         console.log('yes')
//     }
// }
const otpInfo = document.getElementById('otpInfo');
const userEmail = document.getElementById('userEmail');
const method = localStorage.getItem('signupMethod');
const value = localStorage.getItem('emailValue');
const value2 = localStorage.getItem('userValue');
console.log(value)
console.log(value2)

if(method==='email'){

    otpInfo.textContent = `We sent a verification code to your ${method}`
    userEmail.textContent = `${value}`
}
else if (method ==='number')
    {
    
    otpInfo.textContent = `We sent a verification code to your ${method}`
    userEmail.textContent = `${value2}`
}
else{
    window.location.href = 'listings.html'
}



let timeLeft = 30;
const countDown = document.getElementById('countdown');
const resendBtn = document.getElementById('resendBtn');

const countdown = setInterval(
    ()=>{
timeLeft --;
countDown.textContent = `00:${timeLeft}`;

if(timeLeft<10){
    countDown.textContent = `00:0${timeLeft}`
}

if(timeLeft <=0){
    clearInterval(countdown);
    // countDown.textContent = 'OTP expired';
    
}
    },
    1000
);

resendBtn.addEventListener('click',()=>{
    timeLeft = 30;
    countDown.textContent = `00:${timeLeft}`;
    const countdown = setInterval(
    ()=>{
timeLeft --;
countDown.textContent = `00:${timeLeft}`;

if(timeLeft<10){
    countDown.textContent = `00:0${timeLeft}`
}

if(timeLeft <=0){
    clearInterval(countdown);
    // countDown.textContent = 'OTP expired';
    
}
    },
    1000
);

})

// console.log(typeof(timeLeft))








