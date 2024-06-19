import { getProducts, displayProducts } from "../data"
import './Home.css'

function Home () {
    displayProducts(getProducts())
    return(
        <div id="homepage">
            
            <button type="button" id="num-btn">number</button>
            <br />
            <br />
            <div id="item-box"></div>
        </div>
    )
}

export default Home