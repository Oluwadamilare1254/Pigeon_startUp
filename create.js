// const userDetails = {
//     username:"dotadams", 
//     password: "Skely@123"

// }
// console.log(userDetails.username);
const submit = document.querySelector('form');
let UserName = document.getElementById('username');
let passWord = document.getElementById('password');
let userMessage = document.querySelector("#username-message");
let passwordMessage = document.getElementById("password-message");
let nextBtn = document.getElementById('nextBtn');
const passwordBtn = document.getElementById('passwordBtn');



console.log(passwordBtn)
console.log(userMessage)


// // console.log(submit)
// UserName.addEventListener('input',(event)=>{

//     if(UserName.validity.valid){
//         userMessage.textContent = 'Only use letters, numbers, underscores and periods.'
//     }
//     else{
//         detailedMessage()
//     }
// })

// submit.addEventListener('submit', (event)=>{
//     if(!UserName.validity.valid){
//         detailedMessage()

//         event.preventDefault()
//     }
// })

// function detailedMessage(){
// if(UserName.validity.valueMissing){
//     userMessage.innerText='Enter a Username'
// }
// else if (UserName.validity.typeMismatch){
//     userMessage.textContent = 'A Username is expected of you'
// }
// }









// function usernameValidation(){
// if( UserName.value === userDetails.username){
// userMessage.classList.add('green');
// userMessage.innerText = ' Great! username is available';

// }
// else{
//     userMessage.innerText = 'username is not available';
//     userMessage.classList.add('yellow')
// }
// }




// UserName.addEventListener('input',()=>{
// usernameValidation()

// } 

// )



// passWord.addEventListener('input', (event)=>{
//     if(passWord.validity.valid){
//         passwordMessage.textContent=''

//     }
//     else{
//         passwordValidator()
//     }
// })

// submit.addEventListener('submit',(event)=>{
//     if(!passWord.validity.valid){
//         passwordValidator()
//         event.preventDefault()
//     }
// })

// function passwordValidator(){
//     if(passWord.validity.tooShort){
//         passwordMessage.textContent = `The value entered is too short you've currently entered ${passWord.value.length} value must be minimum of ${passWord.minLength}`
//     }
// }

// tenary operator for viewing and hiding password
passwordBtn.addEventListener('click', function (e) {
    e.preventDefault()
    passWord.type == 'text' ? passWord.type = 'password' : passWord.type = 'text'
    let password = passwordBtn.src.includes('Assets/eyes-svgrepo-com.svg') ? passwordBtn.src = 'Assets/eye-closed-svgrepo-com.svg' : passwordBtn.src = 'Assets/eyes-svgrepo-com.svg';
    console.log(password)

})


// Dynamic logic , login/signup

const params = new URLSearchParams(window.location.search);
const mode = params.get('mode');
const dynamicText = document.getElementById('dynamicText');

if (mode == 'login') {
    dynamicText.textContent = 'Welcome Back!'
    console.log('yes')

}
else {
    dynamicText.textContent = 'Create account'
    console.log('no')
}



// #password regular expression
// set a regular expression 
// validate username and help user rectify the problem
// validate password and help user rectify the problem 
// if there's a problem with either of the two i want to mute button and specify the problem to the user 
// if the user passes all the regular expression the user will be allowed to navigate to the home page
const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]).{8,}$/;



UserName.addEventListener('input', () => {
    const usernameValidity = usernameRegex.test(UserName.value)
    if (usernameValidity) {
        userMessage.textContent = 'Great! ';
        userMessage.classList.add('green');
        userMessage.classList.remove('red');
        nextBtn.disabled = false;
    }
    else {
        userMessage.textContent = 'Username must be 3-16 characters, letters, numbers, or underscores only.';
        userMessage.classList.add('red');
        userMessage.classList.remove('green')
        nextBtn.disabled = true;
    }
})

passWord.addEventListener('input', () => {
    const passwordvalidity = passRegex.test(passWord.value)
    console.log(passwordvalidity)
    if (passwordvalidity) {
        passwordMessage.textContent = 'Strong Password!';
        passwordMessage.classList.add('green');
        passwordMessage.classList.remove('red');
        nextBtn.disabled = false;
    }
    else {
        passwordMessage.textContent = 'Password must have at least 8 characters, include uppercase, lowercase, number, and special character.';
        passwordMessage.classList.add('red');
        passwordMessage.classList.remove('green');

        nextBtn.disabled = true;
    }
})

nextBtn.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = 'index.html'
    // alert('clicked')
})










