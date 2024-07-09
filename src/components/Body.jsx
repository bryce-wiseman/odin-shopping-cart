
import Home from './Home'
import Cart from './Cart'
import { useState } from 'react'

function Body() {
    const [showHome, setShowHome] = useState(true)
    const [showCart, setShowCart] = useState(false)

    const handleHome = () => {
        setShowHome(true)
        setShowCart(false)
    }

    const handleCart = () => {
        setShowHome(false)
        setShowCart(true)
    }

    async function btnUpdate() {
        const homeBtn = await document.getElementById('navHomeBtn')
        const cartBtn = await document.getElementById('navCartBtn')
        
        if (homeBtn == null || cartBtn == null) {
            setTimeout(btnUpdate, '100')
        } else {
            homeBtn.onclick = handleHome
            cartBtn.onclick = handleCart
        }
    }
    btnUpdate()

    return (
        <div>
            {showHome && <Home />}
            {showCart && <Cart />}
        </div>
    )
}

export default Body