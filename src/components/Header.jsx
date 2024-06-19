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
                <select className='sans'>
                    <option value="home">Home</option>
                    <option value="cart">Cart</option>
                </select>
            </nav>

            <div id='cart-icon'>
                <p id='items-in-cart' className='sans'>0</p>
                <img src="./src/cart-logo.png" alt="cart" />
            </div>

            <button type="button" id='checkout-btn' className='sans'>Checkout</button>
        </div>
        <div className='breaker'></div>
        </>
    )
}

export default Header