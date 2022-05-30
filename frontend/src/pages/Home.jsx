import './pagecss/Home.css'
import products from '../examples'
import ProductItem from '../components/ProductItem'

function Home() {
    return (
        <div className="Home">
            <div className='banner'>Banner</div>
            <h2 >Latest Products</h2>
            <div className="products">
                {
                    products.map((product, index) => (
                        <ProductItem product={product} key={index} />
                    ))
                }
            </div>

        </div>

    )
}

export default Home