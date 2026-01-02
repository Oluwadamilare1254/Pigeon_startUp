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
const passwordBtn =document.getElementById('passwordBtn');

const params = new URLSearchParams(window.location.search);
const mode = params.get('mode');
const dynamicText = document.getElementById('dynamicText');
console.log(passwordBtn)
console.log(userMessage)
// console.log(submit)
UserName.addEventListener('input',(event)=>{

    if(UserName.validity.valid){
        userMessage.textContent = 'Only use letters, numbers, underscores and periods.'
    }
    else{
        detailedMessage()
    }
})

submit.addEventListener('submit', (event)=>{
    if(!UserName.validity.valid){
        detailedMessage()

        event.preventDefault()
    }
})

function detailedMessage(){
if(UserName.validity.valueMissing){
    userMessage.innerText='Enter a Username'
}
else if (UserName.validity.typeMismatch){
    userMessage.textContent = 'A Username is expected of you'
}
}









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

passwordBtn.addEventListener( 'click', function(e){
    e.preventDefault()
    passWord.type == 'text' ? passWord.type='password':passWord.type='text'
    passwordBtn.src =='Assets/eye-closed-svgrepo-com.svg' ? passwordBtn.src='Assets/eye-closed-svgrepo-com.svg': passwordBtn.src='Assets/eyes-svgrepo-com.svg';
   
})


passWord.addEventListener('input', (event)=>{
    if(passWord.validity.valid){
        passwordMessage.textContent=''

    }
    else{
        passwordValidator()
    }
})

submit.addEventListener('submit',(event)=>{
    if(!passWord.validity.valid){
        passwordValidator()
        event.preventDefault()
    }
})

function passwordValidator(){
    if(passWord.validity.tooShort){
        passwordMessage.textContent = `The value entered is too short you've currently entered ${passWord.value.length} value must be minimum of ${passWord.minLength}`
    }
}

 
 if(mode=='login'){
    dynamicText.textContent = 'Welcome Back!'
    console.log('yes')

}
else{
    dynamicText.textContent = 'Create account'
    console.log('no')
}




