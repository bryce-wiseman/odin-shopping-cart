import { Link } from 'react-router-dom'
import './Header.css'

function Header() {

    return(
        <>
        <div id="header">
            <div id="header-text">
                <h1>Shop!</h1>
                <h3>(In the Name of Love)</h3>
            </div>

            <nav>
                <Link to="/" className='sans' id="navHomeBtn">Home</Link>
                <Link to="/cart" className='sans' id="navCartBtn">Cart</Link>
            </nav>

            <div id='cart-icon'>
                <p id='items-in-cart' className='sans'>0</p>
                <img src="./src/cart-logo.png" alt="cart" />
            </div>

            <button type="button" id='checkout-btn' className='sans' onClick={() => {alert("Ka-Ching! Nice Purchase!")}}>Checkout</button>
        </div>
        <div className='breaker'></div>
        </>
    )
}

export default Header