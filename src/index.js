let shop = document.getElementById('shop');

let shopDetails = [
    {
        id: 1,
        name: 'Sneaker Company',
        title: 'Fall Limited Edition Sneakers',
        description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer. ',
        bigImg: './src/assets/image-product-1.jpg',
        leftArrow: './src/assets/icon-previous.svg',
        rightArrow: './src/assets/icon-next.svg',
        thumbnail: './src/assets/image-product-1-thumbnail.jpg',
        thumbnail2: './src/assets/image-product-2-thumbnail.jpg',
        thumbnail3: './src/assets/image-product-3-thumbnail.jpg',
        thumbnail4: './src/assets/image-product-4-thumbnail.jpg',
    }
]

let generateShop = () => {
    return(shop.innerHTML = shopDetails.map((x) => {
        return  `
        <div class="box1">
        <div id="big-shoe">
            <div class="left"><img id="left-arrow" src="${x.leftArrow}" alt="previous icon"/></div>
            <div class="right"><img id="right-arrow" src="${x.rightArrow}" alt="next icon"/></div>
            <img src="${x.bigImg}" width="400" alt="shoe"/>
        </div>
        <div id="small-shoes">
            <div class="tiny-box"><img src="${x.thumbnail}" width="80" alt="shoe-thumbnail"/></div>
            <div class="tiny-box"><img src="${x.thumbnail2}" width="80" alt="shoe-thumbnail"/></div>
            <div class="tiny-box"><img src="${x.thumbnail3}" width="80" alt="shoe-thumbnail"/></div>
            <div class="tiny-box"><img src="${x.thumbnail4}" width="80" alt="shoe-thumbnail"/></div>
        </div>
    </div>
    <div class="box2">
        <h1>${x.name}</h1>
        <h2>${x.title}</h2>
        <p>${x.description}</p>
        <div id="price-box">
            <div id="price-current">$125.00</div>
            <div id="percent-discount">50%</div>
            <span id="last-price">$250.00</span>
        </div>
        <div id="button-control">
            <div id="product-add"><img src="./src/assets/icon-minus.svg"/><span>0</span><img src="./src/assets/icon-plus.svg"/></div>
            <div id="button-div"><button class="button"><img src="./src/assets/icon-cart.svg"/>Add to cart</button></div>
        </div>
    </div>
        `
    }))
};

generateShop();