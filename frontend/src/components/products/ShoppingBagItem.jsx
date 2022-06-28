import '../componentcss/ShoppingBagItem.css'
import { FaTrash } from 'react-icons/fa'

function ShoppingBagItem({ product }) {
    const { title, imgUrl, price } = product
    const { productId, quantity } = product.shoppingBagItem
    const image = `http://localhost:8000${imgUrl}`
    return (
        <div className="shoppingbag-item-container">
            <div className="shoppingbag-item">
                <img src={image} alt="" />
                <p className='bag-info'>{title}</p>
                <p className='bag-info price-info'>${price}</p>
                <p className='bag-info'>qty: <span className='price-info'>{quantity}</span></p>
                <p className='trash-info'><FaTrash /></p>
            </div>


        </div>
    )
}

export default ShoppingBagItem