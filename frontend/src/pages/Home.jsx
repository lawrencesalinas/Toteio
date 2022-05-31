import './pagecss/Home.css'
import products from '../examples'
import ProductItem from '../components/products/ProductItem'

function Home() {
    const shoesImg = 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    return (
        <div className="Home">
            <div className='banner'>
                <img src="https://images.unsplash.com/photo-1431068799455-80bae0caf685?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            </div>
            <h1>Essentials</h1>
            <div classN ame="categories">
                <div className="category-img"
                    style={{
                        background: `url(${shoesImg}) center no-repeat`,
                        backgroundSize: 'cover'
                    }}>
                    <h5>SHOES</h5>
                </div>
                <div className="category-img">
                    <img src="https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80" alt="" />
                    <h5>SHOES</h5>
                </div>
                <div className="category-img">
                    <img src="https://images.unsplash.com/photo-1604272490759-7c465473958a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                    <h5>SHOES</h5>
                </div>





            </div>
            <h2 >Featured Products</h2>
            <div className="products">
                {
                    products.map((product, index) => (
                        <ProductItem product={product} key={index} />
                    ))
                }
            </div>
            <div className='second-banner'>
                <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
            </div>

        </div >

    )
}

export default Home