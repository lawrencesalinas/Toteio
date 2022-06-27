import '../componentcss/ShoppingBagItem.css'

function ShoppingBagItem({ product }) {
    const { title, imgUrl, price } = product
    const { productId, quantity } = product.shoppingBagItem
    const image = `http://localhost:8000${imgUrl}`
    return (
        <div className="shoppingbag-item-container">
            <div className="shoppingbag-item">
                <img src={image} alt="" />
                <p>{price}</p>
                <p>{title}</p>

            </div>


        </div>
    )
}

export default ShoppingBagItem