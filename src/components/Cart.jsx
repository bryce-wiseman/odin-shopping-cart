import Header from './Header'
import './App.css'
import './Cart.css'
import { getCurrentCart, displayCurrentCart } from '../data.js'

function Cart () {
    getCurrentCart()
    displayCurrentCart()
    return(
        <>
            <Header />
            <div id="cartpage">
            <div id="cart-box">
                
            </div>
        </div>
        </>
    )
}

export default Cart