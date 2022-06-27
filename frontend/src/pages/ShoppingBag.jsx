import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getShoppingBag } from '../features/shoppingBag/shoppingBagSlice'
import Header from '../components/layouts/Header';
import ShoppingBagItem from '../components/products/ShoppingBagItem';

function ShoppingBag() {
    const { shoppingBag, isLoading, isError, isSuccess, message } = useSelector(state => state.shoppingBag)
    const numberOfItems = shoppingBag.length

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getShoppingBag())
    }, [])
    console.log(shoppingBag);
    return (
        <>
            <div className="shoppingbag">
                <Header />
                <h1>Shooping Bag</h1>
                <div className="shoppingBag-items">
                    {shoppingBag && numberOfItems > 0 ? (

                        shoppingBag.map((product) => (
                            <ShoppingBagItem product={product} numberOfItems={numberOfItems} />
                        ))) :
                        <h2>Your Cart is Empty</h2>
                    }
                </div>
            </div>
        </>
    )
}

export default ShoppingBag