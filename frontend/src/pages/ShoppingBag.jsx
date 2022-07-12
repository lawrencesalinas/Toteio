import './pagecss/ShoppingBag.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getShoppingBag, deleteShoppingBagItem, reset } from '../features/shoppingBag/shoppingBagSlice'
import Header from '../components/layouts/Header';
import ShoppingBagItem from '../components/products/ShoppingBagItem';
import Spinner from '../components/shared/Spinner'
import { toast } from 'react-toastify'
import NavBar from '../components/layouts/NavBar';

function ShoppingBag() {

    const { shoppingBag, isLoading, isError, isSuccess, message } = useSelector(state => state.shoppingBag)

    const numberOfItems = shoppingBag.length

    const totalPrice = shoppingBag.reduce((acc, item) => acc + item.shoppingBagItem.quantity * item.price, 0).toFixed(2)
    const totalItems = shoppingBag.reduce((acc, item) => acc + item.shoppingBagItem.quantity, 0)

    const dispatch = useDispatch()

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        dispatch(getShoppingBag())
        dispatch(reset())
    }, [dispatch, isSuccess, message, isError])


    const handleDeleteItem = (id) => {
        dispatch(deleteShoppingBagItem(id))
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <Header />
            <NavBar />
            <div className="shoppingbag">
                <div className="bag-container">
                    <div className="bag-information">
                        <h2>Shopping Bag</h2>
                        <div className="shoppingBag-items">
                            {shoppingBag && numberOfItems > 0 ? (

                                shoppingBag.map((product) => (
                                    <ShoppingBagItem product={product} quantity={product.shoppingBagItem.quantity} key={product.id} handleDeleteItem={handleDeleteItem} />
                                ))
                            ) :
                                <div className="shoppingbag-item-container">
                                    <h2 className='empty-cart'>Your shopping bag is empty. Go back</h2>
                                    <Link to={'/'}>
                                        <button className='signupbtn '>Continue Shopping</button>
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="bag-total">
                        <h3 className='price-info'>Order Summarry</h3>
                        <h4>Subtotal ({totalItems}) Items</h4>

                        <h3 className='price-info'>Order Total:  <span className='total-price'>${totalPrice}</span></h3>
                        {totalItems === 0 ? (
                            <button type='button' className='signupbtn disabled' >Proceed to Checkout</button>
                        ) : (
                            <Link to={'/shipping'}>


                                <button type='button' className='signupbtn ' >Proceed to Checkout</button>
                            </Link>
                        )
                        }

                    </div>
                </div>
            </div>
        </>

    )
}

export default ShoppingBag