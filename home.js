const showBlur = document.getElementById('blur');
const sideBar = document.getElementById('side-bar');
const hamburger = document.getElementById('hamburger');
const pageContent = document.getElementById('pageContent')

const clicked =document.getElementById('clickBtn')


hamburger.addEventListener('click',(e)=>{
    e.stopPropagation();
    sideBar.style.left = '0';
    pageContent.classList.add('blur')
})

document.addEventListener('click',(e)=>{
    console.log(e.target)
    if(!sideBar.contains(e.target)){

        sideBar.style.left = '-80%';
        pageContent.classList.remove('blur');
    }

})
function closeSidebar(){
sideBar.style.left ='-80%';
pageContent.classList.remove('blur');

}

