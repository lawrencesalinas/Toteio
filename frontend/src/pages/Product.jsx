import './pagecss/Product.css'

function Product() {
    return (
        <div className="product" data-aos='fade-in'>
            <div className="top">
                <div className="images">
                    <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-01-F_2_2000.jpg" alt="" className='product-img' />
                    <div className="image-tile">
                        <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-01-F_2_2000.jpg" alt="" className='tile-img' />
                        <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-01-F_2_2000.jpg" alt="" className='tile-img' />
                        <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-01-F_2_2000.jpg" alt="" className='tile-img' />
                    </div>
                </div>

                <div className="product-info">
                    <h1 className='product-header'>Wall Connector</h1>
                    <h3>$300</h3>
                    <p className='quantity'>Quantity</p>
                    <div className="quantity-btn">
                        <button>-</button>
                        <p>3</p>
                        <button>+</button>
                    </div>
                    <button className='cart-btn'>Add to Cart</button>
                    <p className="description">Description</p>
                    <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus P
                        ageMaker including versions of Lorem Ipsum.</p>


                </div>

            </div>
        </div>
    )
}

export default Product