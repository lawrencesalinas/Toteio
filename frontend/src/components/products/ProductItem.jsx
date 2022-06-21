import '../componentcss/ProductItem.css'
import { Link } from 'react-router-dom'

function ProductItem({ product }) {

    const { title, imgUrl, description, rating, numReview, price, id } = product
    return (
        <div className='ProductItem' data-aos='fade-in' data-aos-delay='50'>
            <Link to={`/product/${id}`} >
                <img src={imgUrl} alt="" className='productImage' />
                <div className="productInfo">
                    <p>{title}</p>
                    <p style={{ fontWeight: 'bolder' }}>${price}</p>
                </div>
            </Link>
        </div>
    )
}

export default ProductItem