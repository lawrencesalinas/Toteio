import './pagecss/ShoppingBag.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getShoppingBag } from '../features/shoppingBag/shoppingBagSlice'
import Header from '../components/layouts/Header';
import ShoppingBagItem from '../components/products/ShoppingBagItem';

function ShoppingBag() {
    const { shoppingBag, isLoading, isError, isSuccess, message } = useSelector(state => state.shoppingBag)
    const numberOfItems = shoppingBag.length

    const totalPrice = shoppingBag.reduce((acc, item) => acc + item.shoppingBagItem.quantity * item.price, 0).toFixed(2)
    const totalItems = shoppingBag.reduce((acc, item) => acc + item.shoppingBagItem.quantity, 0)


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getShoppingBag())
    }, [dispatch])

    console.log(shoppingBag);
    return (
        <>
            <Header />
            <div className="shoppingbag">

                <h1>Shopping Bag</h1>
                <div className="shoppingBag-items">
                    {shoppingBag && numberOfItems > 0 ? (

                        shoppingBag.map((product) => (
                            <ShoppingBagItem product={product} numberOfItems={numberOfItems} />
                        ))
                    ) :
                        <h2>Your Cart is Empty</h2>
                    }
                </div>
                <h2>Subtotal ({totalItems}) Items</h2>
                <h2>${totalPrice} total</h2>
            </div>
        </>

    )
}

export default ShoppingBag