import './componentcss/ProductItem.css'
function ProductItem({ product }) {
    const { name, img, description, rating, numReview } = product
    return (
        <div className='ProductItem'>
            <img src={img} alt="" className='productImage' />
            <div className="productInfo">
                <h3>{name}</h3>
            </div>

        </div>
    )
}

export default ProductItem