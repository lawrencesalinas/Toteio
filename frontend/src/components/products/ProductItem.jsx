import '../componentcss/ProductItem.css'
function ProductItem({ product }) {
    console.log(product);
    const { title, imgUrl, description, rating, numReview, price } = product
    return (
        <div className='ProductItem' data-aos='fade-in' data-aos-delay='50'>
            <img src={imgUrl} alt="" className='productImage' />
            <div className="productInfo">
                <p>{title}</p>
                <p>${price}</p>
            </div>

        </div>
    )
}

export default ProductItem