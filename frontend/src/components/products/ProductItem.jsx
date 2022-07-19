import '../componentcss/ProductItem.css'
import { Link } from 'react-router-dom'

function ProductItem({ product }) {

    const { title, imgUrl1, description, rating, numReview, price, id } = product

    return (
        <div className='ProductItem' >
            <Link to={`/product/${id}`} >
                <img src={imgUrl1} alt="" className='productImage' />
                <div className="productInfo">
                    <p>{title}</p>
                    <p className='productInfo-price'>${price}</p>
                </div>
            </Link>
        </div >
    )
}

export default ProductItem