const predictionDetails = [
    {
        image: 'Assets/20251103_OHR.MexicoJelly_EN-US6803524310_UHD_bing.jpg',
        text: 'Will Burna Boy outsell his last album?'
    },
    {
        image: 'Assets/background.jpg',
        text: 'Will Wizkid outsell his last album?'
    },
    {
        image: 'Assets/background.jpg',
        text: 'Will Wizkid outsell his last album?'
    },
    {
        image: 'Assets/background.jpg',
        text: 'Will Wizkid outsell his last album?'
    },
    {
        image: 'Assets/background.jpg',
        text: 'Will Wizkid outsell his last album?'
    }
]

let container = document.getElementById('prediction');
console.log(container)
predictionDetails.forEach(
    function (item) {
        let productCard = `
<div class="card-style">
    <div class="img-text">
                <div class="img-holder">
                    <img src="${item.image}" alt="">
                </div>
                <p>Will Burna Boy outsell his last album?</p>
    </div>
                <button type="submit" id="join">Join</button>
</div>
                `

        container.innerHTML += productCard;
    }

)