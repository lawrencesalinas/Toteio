import '../componentcss/CategoryItem.css'
import apiUrl from '../../apiConfig'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function CategoryItem({ product }) {
    const { title, imgUrl1, description, rating, numReview, price, id } = product
    const [fillHeart, setFillHeart] = useState(false)

    return (
        <div className="category-item">
            <div className="category-image">
                {fillHeart ? (
                    <p className='image-heart' onClick={() => setFillHeart(false)}><FaHeart /></p>
                ) : (
                    <p className='image-heart' onClick={() => setFillHeart(true)}><FaRegHeart /></p>
                )

                }
                <Link to={`/product/${id}`}>
                    <img src={imgUrl1} alt="" />
                </Link >
            </div>
            <div className="category-info">
                <p className='info-title'>{title}</p>
                <p className='category-price'>${price}</p>
            </div>

        </div >

    )
}

export default CategoryItem