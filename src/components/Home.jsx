import { getProducts, displayProducts, adjustItemsInCart } from "../data"
import './App.css'
import './Home.css'
import Header from "./Header"

function Home () {
    displayProducts(getProducts())
    return(
        <>
            <Header />
            <div id="homepage">
                <div id="item-box"></div>
            </div>
        </>
    )
}

export default Home