import '../componentcss/CategoryItem.css'
import apiUrl from '../../apiConfig'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function CategoryItem({ product, addToFavorites, removeFavorite }) {
    const { title, imgUrl1, description, rating, numReview, price, id, } = product
    const [fillHeart, setFillHeart] = useState(null)

    const addTToFave = () => {

        setFillHeart(true)
        const newFavorite = {
            title: title,
            imgUrl1: imgUrl1,
            description: description,
            price: price,
            id: id,

        }

        addToFavorites(newFavorite)
    }





    return (
        <div className="category-item">
            <div className="category-image">
                {fillHeart ? (
                    <p className='image-heart' onClick={addTToFave}><FaHeart /></p>
                ) : (
                    <p className='image-heart' onClick={addTToFave}><FaRegHeart /></p>
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