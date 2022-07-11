import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getAdminProducts, reset, getUserProducts, getAAllShoes, getProducts } from '../../features/product/productSlice'
import CategoryItem from './CategoryItem'
import { GiRunningShoe, GiTShirt } from 'react-icons/gi'
import { FaHeadphones } from 'react-icons/fa'
import Spinner from '../shared/Spinner'
import { get } from 'mongoose'


function CategoryContent({ images, categoryText, changeHeading, location, pathMatchRoute, }) {
    const { products, isLoading, isSuccess } = useSelector((state) => state.products)

    const navigate = useNavigate()
    const { categoryName } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset())
            }
        }
    }, [isSuccess, dispatch])



    console.log(categoryName);

    useEffect(() => {
        dispatch(getProducts(categoryName))

    }, [dispatch, categoryName])
    if (isLoading) {
        return <Spinner />
    }
    return (
        <>
            <div className="header-images">
                <img src={images[0]} alt="" />
                <img src={images[1]} alt="" />
                <img src={images[2]} alt="" />
                <img src={images[3]} alt="" />
            </div>

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


                    <div className="gender-images">
                        <div className="category-img" data-aos='fade-right' data-aos-delay='70'>
                            <Link to="/category/shoes">
                                <img src={images[5]} alt="" className='main-image' />
                            </Link>
                            <h5>MEN</h5>
                        </div>
                        <div className="category-img" data-aos='fade-left' data-aos-delay='150'>
                            <Link to='/category/tech'>
                                <img src={images[6]} alt="" className='main-image' />
                            </Link>
                            <h5>WOMEN</h5>
                        </div>
                    </div>

                    <hr />
                    <h2 className=''>Men Shoes</h2>




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