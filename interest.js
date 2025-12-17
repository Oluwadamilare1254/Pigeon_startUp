const interest = document.querySelectorAll('.interest');
submitBtn = document.getElementById('submitBtn');
let selected = 0;
interest.forEach(
    item => {
        item.addEventListener('click', () => {

            // const isSelected = item.classList.contains('selected');
            item.classList.toggle('selected');

            // if(isSelected==5){
            //     // item.classList.remove('selected');
            //     console.log("it's 5 already")
            // }
            // else if(selected<5){
            //     item.classList.add('selected');
            // }
            // else{
            //     return;
            // }


            // item.classList.add('selected') ? item.classList.remove('selected'): item.classList.add('selected')
            


            selected = document.querySelectorAll('.selected').length;
            if (selected >= 3 && selected <= 5) {
                submitBtn.disabled = false;
            }
            else if (selected > 5) {
                item.classList.remove('selected');

            }
            else {
                submitBtn.disabled = true;
            }

            console.log(selected);

        });
    }


)


console.log(interest);

color = document.querySelector('.select');
console.log(color)
// add a style to the selected button while being clicked on done**
// click on three  minimum and 5 maximum done
// if users clicks less than three the sumbmit button should be muted done**
// users should not be allowed to click more than 5 done



