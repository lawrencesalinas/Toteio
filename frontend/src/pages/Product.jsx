import './pagecss/Product.css'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { getProduct } from '../features/product/productSlice'
import Header from '../components/layouts/Header'
import Spinner from "../components/shared/Spinner"

function Product() {
    const { user } = useSelector(state => state.auth)
    const { product, isLoading, isError, message } = useSelector(state => state.products)

    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        dispatch(getProduct(id))
    }, [isError, message, id])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <Header linkcolor='#181818' />
            <div className="product" data-aos='fade-in' data-aos-delay='50'>

                <div className="top">
                    <div className="images">
                        <img src={product.imgUrl} alt="" className='product-img' />
                        <div className="image-tile">
                            <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-01-F_2_2000.jpg" alt="" className='tile-img' />
                            <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-01-F_2_2000.jpg" alt="" className='tile-img' />
                            <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-01-F_2_2000.jpg" alt="" className='tile-img' />
                        </div>
                    </div>

                    <div className="product-info">
                        <h1 className='product-header'>{product.title}</h1>
                        <h3>${product.price}</h3>
                        {/* <p className='quantity'>Quantity</p>
                        <div className="quantity-btn">
                            <button>-</button>
                            <p>3</p>
                            <button>+</button>
                        </div> */}
                        {/* {user.id === product.userId ? (
                            <>
                                <button className='cart-btn'>Edit </button>
                                <button className='cart-btn'>Delete </button>
                            </>
                        ) : <button className='cart-btn'>Add to Cart</button>} */}
                        <p className="description">Description</p>
                        <p>{product.description}</p>


                    </div>

                    <div className="product-info">
                        <h3>${product.price}</h3>
                        <p className='quantity'>Quantity</p>
                        <div className="quantity-btn">
                            <button>-</button>
                            <p>3</p>
                            <button>+</button>
                        </div>
                        {user && user.id === product.userId ? (
                            <div className="product-button">
                                <Link to={`/edit-product/${id}`}>
                                    <button className='editbtn'>Edit </button>
                                </Link>
                                <button className='deletebtn'>Delete </button>
                            </div>
                        ) :
                            (

                                <div className="product-button">
                                    <button className='signupbtn'>Add to Cart </button>
                                </div>

                            )}




                    </div>

                </div>
            </div>
        </>
    )
}

export default Product