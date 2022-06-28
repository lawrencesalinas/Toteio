import './pagecss/ShoppingBag.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getShoppingBag, deleteShoppingBagItem, reset } from '../features/shoppingBag/shoppingBagSlice'
import Header from '../components/layouts/Header';
import ShoppingBagItem from '../components/products/ShoppingBagItem';

function ShoppingBag() {
    const [trigger, setTrigger] = useState(false)
    const { shoppingBag, isLoading, isError, isSuccess, message } = useSelector(state => state.shoppingBag)

    const numberOfItems = shoppingBag.length

    const totalPrice = shoppingBag.reduce((acc, item) => acc + item.shoppingBagItem.quantity * item.price, 0).toFixed(2)
    const totalItems = shoppingBag.reduce((acc, item) => acc + item.shoppingBagItem.quantity, 0)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getShoppingBag())
        dispatch(reset())
    }, [dispatch, isSuccess])


    const handleDeleteItem = (id) => {
        dispatch(deleteShoppingBagItem(id))
    }

    return (
        <>
            <Header />
            <div className="shoppingbag">
                <div className="bag-container">
                    <h2>Shopping Bag</h2>
                    <div className="shoppingBag-items">
                        {shoppingBag && numberOfItems > 0 ? (

                            shoppingBag.map((product) => (
                                <ShoppingBagItem product={product} key={product.id} handleDeleteItem={handleDeleteItem} />
                            ))
                        ) :
                            <h2>Your Cart is Empty</h2>
                        }
                    </div>
                    <h2>Subtotal ({totalItems}) Items</h2>
                    <h2>${totalPrice} total</h2>
                </div>
            </div>
        </>

    )
}

export default ShoppingBag