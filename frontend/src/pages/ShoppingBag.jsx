import React from 'react'

function ShoppingBag() {
    const cart = null
    return (
        <div className="shoppingbag">
            <h1>Shooping Bag</h1>
            {cart && cart.length > 0}
        </div>
    )
}

export default ShoppingBag