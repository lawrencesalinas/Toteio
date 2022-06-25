import '../componentcss/CategoryItem.css'
import { FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function CategoryItem({ product }) {
    const { title, imgUrl, description, rating, numReview, price, id } = product
    const image = `http://localhost:8000${imgUrl}`

    return (
        <div className="category-item">
            <Link to={`/product/${id}`}>

                <p className='image-heart'><FaRegHeart /></p>
                <div className="category-image">
                    <img src={image} alt="" />
                </div>
                <div className="category-info">
                    <p className='info-title'>{title}</p>
                    <p className='category-price'>${price}</p>
                </div>
            </Link >
        </div>

    )
}

export default CategoryItem