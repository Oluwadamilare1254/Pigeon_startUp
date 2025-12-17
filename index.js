let dynamicInput = document.getElementById('input-container');
let dynamicInput1 = document.getElementById('input-container1');
let dynamicInput2 = document.getElementById('input-container2');
let dynamicInput3 = document.getElementById('input-container3');

dynamicInput.addEventListener('focus',()=>{
    dynamicInput.dataset.placeholder = dynamicInput.placeholder;
    dynamicInput.placeholder = '';
})

dynamicInput.addEventListener('blur',()=>{
    dynamicInput.placeholder = dynamicInput.placeholder;
})

dynamicInput1.addEventListener('focus',()=>{
    dynamicInput1.dataset.placeholder = dynamicInput1.placeholder;
    dynamicInput1.placeholder = '';
})

dynamicInput1.addEventListener('blur',()=>{
    dynamicInput1.placeholder = dynamicInput1.placeholder;
})

dynamicInput2.addEventListener('focus',()=>{
    dynamicInput2.dataset.placeholder = dynamicInput2.placeholder;
    dynamicInput2.placeholder = '';
})

dynamicInput2.addEventListener('blur',()=>{
    dynamicInput2.placeholder = dynamicInput2.placeholder;
})

dynamicInput3.addEventListener('focus',()=>{
    dynamicInput3.dataset.placeholder = dynamicInput3.placeholder;
    dynamicInput3.placeholder = '';
})

dynamicInput3.addEventListener('blur',()=>{
    dynamicInput3.placeholder = dynamicInput3.placeholder;
})