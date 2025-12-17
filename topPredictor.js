const dynamicInfo = [
    {
        image: "Assets/background.jpg",
        name: "MIKE",
        username: "@MPremium",
        NOwins: "30 wins",
        num: "1"
    },
    {
        image: "Assets/20251103_OHR.MexicoJelly_EN-US6803524310_UHD_bing.jpg",
        name: "MIKE",
        username: "@MPremium",
        NOwins: "30 wins",
        num: "2"
    }
]
let container = document.getElementById('predictionCard');
// console.log(container)
dynamicInfo.forEach(
    function (item) {
        let productCard = `
         <div class="topPredictor-card">
        <div class="specific-layout">
                <div class="numbering-container">
                    <span class="numbering">${item.num}</span>
                </div>
                <div class="img-username">
                    <div class="img-container">
                        <img src ="${item.image}" alt=""/>
                    </div>
                    <div class="name-username">
                        <h4>${item.name}</h4>
                        <h4>${item.username}</h4>
                    </div>
                </div>
            </div>
            <div class="num-wins">
                <span>${item.NOwins}</span>
            </div>
        </div>`

        container.innerHTML += productCard;
    }
)