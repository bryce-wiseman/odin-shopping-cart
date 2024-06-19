
export async function getProducts() {
        let baseData = await fetch('https://fakestoreapi.com/products')
        let sortedData = await baseData.json()
        console.log(sortedData)
        return sortedData
}

export async function displayProducts(arr) {
    let dataList = await arr
    console.log(dataList[0])

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
        imgBox.appendChild(productImg)
        item.appendChild(imgBox)
        item.appendChild(productTitle)
    
        itemBox.appendChild(item)
    }
}

export function getCart() {

}

export function displayCart() {
    
}