import './pagecss/Product.css'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getProduct, deleteProduct, reset } from '../features/product/productSlice'
import { addToShoppingBag } from '../features/shoppingBag/shoppingBagSlice'
import Header from '../components/layouts/Header'
import Spinner from "../components/shared/Spinner"
import NavBar from '../components/layouts/NavBar'
import apiUrl from '../apiConfig'


function Product() {
    const { user } = useSelector(state => state.auth)
    const { product, isLoading, isError, isSuccess, message } = useSelector(state => state.products)

    const [mainImage, setMainImage] = useState('')

    const { id } = useParams()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isSuccess) {
            toast.success('Deleted Successfully')
            dispatch(reset())
            navigate('/my-products')

        }
    }, [isError, message, id, isSuccess, dispatch, navigate])

    useEffect(() => {
        dispatch(getProduct(id))
        dispatch(reset())
    }, [dispatch, id])




    const deleteHandler = () => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteProduct(id))
            dispatch(reset())

        }
    }

    const addToCartHandler = () => {

        if (user !== null) {
            dispatch(addToShoppingBag({ productId: id }))
            toast.success('item added to shopping bag')
        } else {
            navigate('/cart')
        }

    }

    const imageClickHander = (e) => {
        setMainImage(e.target.src)
    }


    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <Header linkcolor='#fff' bgcolor='#181818' />

            <div className="product" data-aos='fade-in' data-aos-delay='50'>
                <NavBar />
                <div className="top">
                    <div className="images">

                        {mainImage === '' ? (
                            <img src={product.imgUrl1} alt="" className='product-img' />) :
                            (<img src={mainImage} alt="" className='product-img' />)
                        }

                        <div className="image-tile">
                            {product.imgUrl1 !== `${apiUrl}/undefined` ? (
                                <img src={product.imgUrl1} alt="" className='tile-img' onClick={imageClickHander} />
                            ) : null}
                            {product.imgUrl2 !== `${apiUrl}/undefined` ? (
                                <img src={product.imgUrl2} alt="" className='tile-img' onClick={imageClickHander} />
                            ) : null}
                            {product.imgUrl3 !== `${apiUrl}/undefined` ? (
                                <img src={product.imgUrl3} alt="" className='tile-img' onClick={imageClickHander} />
                            ) : null}
                            {product.imgUrl4 !== `${apiUrl}/undefined` ? (
                                <img src={product.imgUrl4} alt="" className='tile-img' onClick={imageClickHander} />
                            ) : null}
                        </div>
                    </div>

                    <div className="product-info ">
                        <h1 className='product-header'>{product.title}</h1>
                        <p className='decription-text'>{product.brand}</p>
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
                        <p className='decription-text'>{product.description}</p>


                    </div>

                    <div className="product-info-btn">
                        {/* <h3>${product.price}</h3> */}
                        <h3>Condition: {product.condition}</h3>
                        <p className='quantity'>Quantity</p>
                        <div className="quantity-btn">
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                        </div>
                        {user && user.id === product.userId ? (
                            <div className="product-button">
                                <Link to={`/edit-product/${id}`}>
                                    <button className='editbtn'>Edit </button>
                                </Link>
                                <button className='deletebtn' onClick={deleteHandler}>Delete </button>
                            </div>
                        ) :
                            (

                                <div className="product-button">
                                    <button className='signupbtn' onClick={addToCartHandler}>Add to Bag </button>
                                </div>

                            )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Product