const countDown = document.getElementById('countdown');                                                                                                                 
// countDown.innerText = timer();
let initialCount = 30;
function timer(){
    if(!initialCount==0){
        countDown.innerText = initialCount  
    }
    else{
        Validate()
    }
    initialCount = initialCount -1; 
}
setInterval(timer,1000)
console.log(timer)

function Validate(){
    if(initialCount==0){
        console.log(yes)
    }
}








