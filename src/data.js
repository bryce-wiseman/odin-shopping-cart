
// FOR HOME PAGE
let currentCart = []

export async function getProducts() {
        let baseData = await fetch('https://fakestoreapi.com/products')
        let sortedData = await baseData.json()
        return sortedData
}

export async function displayProducts(arr) {
    
    let dataList = await arr

    let itemBox = document.getElementById('item-box')

    for (let i = 0; i < dataList.length; i++) {
        let item = document.createElement('div')
        item.className = 'item'
        let imgBox = document.createElement('div')
        imgBox.className = 'imgBox'
        let productImg = document.createElement('img')
        productImg.className = 'itemImg'
        productImg.src = dataList[i]['image']
        let productTitle = document.createElement('h6')
        productTitle.className = 'itemTitle'
        productTitle.innerHTML = dataList[i].title
        let qtyBox = document.createElement('div')
        qtyBox.className = 'qtyBox'
        let qtyLabel = document.createElement('label')
        qtyLabel.htmlFor = dataList[i].title
        qtyLabel.innerHTML = 'Qty:'
        qtyLabel.classList = 'sans'
        let qtyInput = document.createElement('input')
        qtyInput.type = 'number'
        qtyInput.name = 'qtyOfItem'
        qtyInput.id = dataList[i].title
        let addToCartBtn = document.createElement('button')
        addToCartBtn.type = 'button'
        addToCartBtn.innerHTML = 'Add to Cart'
        addToCartBtn.classList = "cartBtn sans"
        addToCartBtn.onclick = () => {
            let objForCart = {
                title: productTitle.innerHTML,
                img: productImg.src,
                quantity: qtyInput.value
            }
            if(Number(qtyInput.value) > 0) {
                currentCart.push(objForCart)
                console.log(currentCart)
                adjustItemsInCart(objForCart.quantity)
            }
        }

        qtyBox.appendChild(qtyLabel)
        qtyBox.appendChild(qtyInput)
        qtyBox.appendChild(addToCartBtn)

        imgBox.appendChild(productImg)
        item.appendChild(imgBox)
        item.appendChild(productTitle)
        item.appendChild(qtyBox)
    
        itemBox.appendChild(item)
    }
    adjustItemsInCart()
}

export function adjustItemsInCart(adjustBy) {
    let currentItems = 0
    let itemsInCart = document.getElementById('items-in-cart')
    for (let i = 0; i < currentCart.length; i++) {
        currentItems += Number(currentCart[i].quantity)
    }
    itemsInCart.innerHTML = currentItems
}


// FOR CART PAGE

export function getCurrentCart() {
    console.log(currentCart)
}

export async function displayCurrentCart() {
    let currentCartItems = await currentCart
    let cartBox = document.getElementById('cart-box')
    let itemsInCart = document.getElementById('items-in-cart')
    let totalItems = 0

    while (cartBox.firstChild) {
        cartBox.removeChild(cartBox.firstChild)
    }

    for(let i = 0; i < currentCart.length; i++) {
        let cartItem = document.createElement('div')
        cartItem.className = 'cart-item'
        let cartItemImgBox = document.createElement('div')
        cartItemImgBox.className = 'cartItemImgBox'
        let cartItemImg = document.createElement('img')
        cartItemImg.src = currentCartItems[i].img
        let cartItemName = document.createElement('h4')
        cartItemName.className = 'cartItemName'
        cartItemName.innerHTML = currentCartItems[i].title
        let cartItemNum = document.createElement('h4')
        cartItemNum.innerHTML = 'Qty: ' + currentCartItems[i].quantity

        let cartBtnDiv = document.createElement('div')
        cartBtnDiv.className = 'cartBtnDiv'
        let cartItemSubtractBtn = document.createElement('button')
        cartItemSubtractBtn.type = 'button'
        cartItemSubtractBtn.classList = 'sans cartItemBtn'
        cartItemSubtractBtn.innerHTML = '-1'
        cartItemSubtractBtn.onclick = () => {
            if(currentCartItems[i].quantity > 1) {
                currentCartItems[i].quantity -= 1
                displayCurrentCart()
            } else {
                currentCartItems.splice(i, 1)
                console.log(currentCartItems)
                displayCurrentCart()
            }
        }
        let cartItemDeleteBtn = document.createElement('button')
        cartItemDeleteBtn.type = 'button'
        cartItemDeleteBtn.classList = 'sans cartItemBtn'
        cartItemDeleteBtn.innerHTML = 'Remove'
        cartItemDeleteBtn.onclick = () => {
            currentCartItems.splice(i, 1)
                console.log(currentCartItems)
                displayCurrentCart()
        }

        cartItemImgBox.appendChild(cartItemImg)
        cartItem.appendChild(cartItemImgBox)
        cartItem.appendChild(cartItemName)
        cartItem.appendChild(cartItemNum)
        cartBtnDiv.appendChild(cartItemSubtractBtn)
        cartBtnDiv.appendChild(cartItemDeleteBtn)
        cartItem.appendChild(cartBtnDiv)
        cartBox.appendChild(cartItem)

        totalItems += Number(currentCartItems[i].quantity)
        itemsInCart.innerHTML = totalItems
    }
}