import '../componentcss/ProductItem.css'
function ProductItem({ product }) {
    const { name, img, description, rating, numReview, price } = product
    return (
        <div className='ProductItem'>
            <img src={img} alt="" className='productImage' />
            <div className="productInfo">
                <p>{name}</p>
                <p>${price}</p>
            </div>

        </div>
    )
}

export default ProductItem