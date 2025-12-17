const profileDetails = [
    {
        image:'Assets/background.jpg',
        name: 'Damilare',
        userName: '@King_Dee',
        text: "Don't flop for real!"
    },
    {
        image:'Assets/20251103_OHR.MexicoJelly_EN-US6803524310_UHD_bing.jpg',
        name:'Hamid',
        userName:'@dotadams',
        text:"Why i strongly believe the market rave for crypto is a pure bubble, and the burst will hurt everyone except me cause i'll be laughing."
    }
]

const container = document.getElementById('profile-card')
profileDetails.forEach(function(item){
    let productCard =`
    <div class="profile-info">
            <div class="name-profile">
                <div class="general">
                    <div class="img-container">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="user-name">
                        <h1>${item.name}</h1>
                        <div class="username-date">
                            <span>${item.userName}</span>
                            <span>11h</span>
                        </div>
                    </div>
                </div>
                <span class="dots">...</span>
            </div>
            <div class="content-card">
                <p>${item.text}</p>
                <h2>A thread 🧺</h2>
            </div>
            <div class="actions">
                <div class="left">
                    <div id='text-logo'>
                        <div>💬</div>
                        <span>900</span>
                    </div>
                    <div id=text-logo>
                        <div>❤️</div>
                        <span>900</span>
                    </div>
                </div>
                <div class="right">
                    <div id='text-logo' class='two'>
                        <div>🥷</div>
                        <span>1.6k</span>
                    </div>
                    <div id=text-logo two>
                        <div>👊</div>
                        <span>1.3k</span>
                    </div>
                    <div id='text-logo' class='two'>
                        <div>👊</div>
                    </div>
                </div>
            </div>
        </div>
    `
    container.innerHTML+=productCard
})


const fruits = ["bannana", "orange", "apple", "Mango"]
console.log(fruits.forEach(addText))


function addText(value){
let text = "i love"
text+=value;
}


const commentBtn = document.getElementById('text-logo');
const commentField = document.getElementById('comment-field');
const inputField = document.getElementById('input-field');
const sendBtn =document.getElementById('send-button');


commentBtn.addEventListener('click',()=>{
    commentField.style.display='block';
    container.style.filter = 'blur(10px)';
}
)


function displayMessage(){
    let message = localStorage.getItem('message');
    const text = document.getElementById('dynmanic-img');
    text.textContent = message ;

}

sendBtn.addEventListener('click',()=>{
    localStorage.setItem('message',inputField.value)
    displayMessage()
})

displayMessage()
