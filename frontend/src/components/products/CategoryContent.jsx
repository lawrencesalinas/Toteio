import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getAdminProducts, reset, getUserProducts, getAAllShoes } from '../../features/product/productSlice'



import CategoryItem from './CategoryItem'

import { GiRunningShoe, GiTShirt } from 'react-icons/gi'
import { FaHeadphones } from 'react-icons/fa'


function CategoryContent({ images, categoryText, changeHeading, location, pathMatchRoute, }) {
    const { products, isLoading, isSuccess } = useSelector((state) => state.products)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset())
            }
        }
    }, [isSuccess, dispatch])




    useEffect(() => {
        const getAllProducts = async () => {
            await dispatch(getUserProducts())
        }

        const getShoes = async () => {
            await dispatch(getAAllShoes())
        }

        if (pathMatchRoute('/category/shoes')) {
            return getAllProducts
        } else if (pathMatchRoute('/category/tech')) {
            return getShoes
        }



    }, [dispatch])
    return (
        <>
            <>
                <div className="header-images">
                    <img src={images[0]} alt="" />
                    <img src={images[1]} alt="" />
                    <img src={images[2]} alt="" />
                    <img src={images[3]} alt="" />
                </div>
            </>



            <div className="category-content">
                <div className="side-nav-category">
                    <ul className="navbarListItems">
                        <li className="navbarListItem" onClick={() => navigate('/category/shoes')}>
                            <GiRunningShoe fill={pathMatchRoute('/category/shoes') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' />
                            <p className={pathMatchRoute('/category/shoes') ? 'navBarListItemNameActive' : 'navbarListItemName'}>Shoes</p>
                        </li>
                        <li className="navbarListItem" onClick={() => navigate('/category/tech')}>
                            <FaHeadphones fill={pathMatchRoute('/category/tech') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' />
                            <p className={pathMatchRoute('/category/tech') ? 'navBarListItemNameActive' : 'navbarListItemName'}>Tech</p>
                        </li>
                        <li className="navbarListItem" onClick={() => navigate('/category/clothes')}>
                            <GiTShirt fill={pathMatchRoute('/category/clothes') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' />
                            <p className={pathMatchRoute('/category/clothes') ? 'navBarListItemNameActive' : 'navbarListItemName'}>Clothes</p>
                        </li>
                    </ul>
                </div>


                <div className="category-products-banner">
                    <div className="category-header-container">
                        <h2 className='category-header' data-aos='fade-right'>{changeHeading(location.pathname)}</h2>
                    </div>
                    <div className="image-banner-header">
                        <h2 className='content-header'>{categoryText}</h2>
                        <img className='image-banner' src={images[4]} alt="" />
                    </div>


                    {/* <div className="gender-images">
                        <img src="https://images.unsplash.com/photo-1511105043137-7e66f28270e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                        <img src="https://images.unsplash.com/photo-1559334417-01b38aec66bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                    </div> */}
                    <div className="gender-images">
                        <div className="category-img" data-aos='fade-right' data-aos-delay='70'>
                            <Link to="/category/shoes">
                                <img src="https://images.unsplash.com/photo-1625697501168-8db2e03c1046?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" className='main-image' />
                            </Link>
                            <h5>MEN</h5>
                        </div>
                        <div className="category-img" data-aos='fade-right' data-aos-delay='150'>
                            <Link to='/category/tech'>
                                <img src="https://images.unsplash.com/photo-1559334417-01b38aec66bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className='main-image' />
                            </Link>
                            <h5>WOMEN</h5>
                        </div>
                    </div>



                    <div className="category-products">
                        {products.map((product) => (
                            <CategoryItem product={product} key={product.id} />
                        ))}

                    </div>
                </div>

            </div>
        </>

    )
}

export default CategoryContent