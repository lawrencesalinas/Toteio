import './pagecss/Home.css'
import products from '../examples'
import ProductItem from '../components/products/ProductItem'
import Header from '../components/layouts/Header'

function Home() {
    const shoesImg = 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    const techImg = 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80'
    const clothImg = 'https://images.unsplash.com/photo-1604272490759-7c465473958a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    return (
        <div className="Home">
            <div className='banner' data-aos='fade-in'>

                <img src="https://images.unsplash.com/photo-1431068799455-80bae0caf685?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                <h1 data-aos='fade-right' data-aos-delat='400'>DISCOVER NEW TECHNOLOGY</h1>
                <button data-aos='fade-right' data-aos-delat='400'>SHOP TECH</button>
            </div>
            <h1 data-aos='fade-up' data-aos-delay='100'>Essentials</h1>
            <hr data-aos='fade-up' data-aos-delay='100' />
            <div className="categories">

                <div className="category-img" data-aos='fade-right' data-aos-delay='700'>
                    <img src={shoesImg} alt="" />
                    <h5>SHOES</h5>
                </div>
                <div className="category-img" data-aos='fade-right' data-aos-delay='900'>
                    <img src={techImg} alt="" />
                    <h5>TECH</h5>
                </div>
                <div className="category-img" data-aos='fade-right' data-aos-delay='1100'>
                    <img src={clothImg} alt="" />
                    <h5>CLOTHES</h5>
                </div>
            </div>




            <h1 data-aos='fade-up' data-aos-delay='100'>Featured Products</h1>
            <hr className='featured' data-aos='fade-up' data-aos-delay='100' />


            <div className="products">
                {
                    products.map((product, index) => (
                        <ProductItem product={product} key={index} />
                    ))
                }
            </div>

            {/* <div className='second-banner'>
                <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/Lifestyle_web.jpg" alt="" />
            </div> */}


        </div >

    )
}

export default Home