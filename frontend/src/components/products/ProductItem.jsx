import '../componentcss/ProductItem.css'
import { Link } from 'react-router-dom'

function ProductItem({ product }) {

    const { title, imgUrl, description, rating, numReview, price, id } = product
    const image = `http://localhost:8000${imgUrl}`



    return (
        <div className='ProductItem' >
            <Link to={`/product/${id}`} >
                <img src={image} alt="" className='productImage' />
                <div className="productInfo">
                    <p>{title}</p>
                    <p className='productInfo-price'>${price}</p>
                </div>
            </Link>
        </div >
    )
}

export default ProductItem