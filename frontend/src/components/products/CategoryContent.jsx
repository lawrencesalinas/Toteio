import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getAdminProducts, reset, getUserProducts, getAAllShoes, getProducts } from '../../features/product/productSlice'
import CategoryItem from './CategoryItem'
import { GiRunningShoe, GiTShirt } from 'react-icons/gi'
import { FaHeadphones, FaSearch } from 'react-icons/fa'
import Spinner from '../shared/Spinner'
import { get } from 'mongoose'


function CategoryContent({ path, images, categoryText, changeHeading, location, pathMatchRoute, }) {
    const { products, isLoading, isSuccess } = useSelector((state) => state.products)

    const navigate = useNavigate()
    const { categoryName } = useParams()
    const [categoryItems, setCategoryItems] = useState([])
    const [favoriteList, setFavoriteList] = useState([JSON.parse(localStorage.getItem('favorites'))])

    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset())
            }
        }
    }, [isSuccess, dispatch])





    const subcategoryTitle = `${location.search.substr(8, 13)} ${categoryName.toUpperCase()}`;

    useEffect(() => {
        dispatch(getProducts(`${categoryName}${location.search}`))
        // fetchData()

    }, [dispatch, categoryName, location.pathname, location.search,])



    // const fetchData = async () => {
    //     let newData = products.map((product) => {
    //         {
    //             return { ...product, heart: null }
    //         }
    //     })
    //     // console.log(newData);
    //     setCategoryItems(newData)
    // }


    // console.log(categoryItems);



    // console.log(newData);
    // setCategoryItems(newData)
    // console.log(categoryItems);




    const addToFavorites = async (newFavorite) => {
        // console.log(newFavorite.id);

        // console.log(favoriteList.length);
        // if (favoriteList.length > 1) {
        //     console.log('2nd like');
        //     const favorited = await favoriteList.some(item => item.id === newFavorite.id)
        //     if (favorited) {
        //         deleteFavorite(newFavorite.id)
        //     } else {
        //         setFavoriteList([newFavorite, ...favoriteList])
        //         localStorage.setItem('favorites', JSON.stringify(favoriteList))
        //     }
        //     // console.log('musta');
        //     // setFavoriteList([newFavorite, ...favoriteList])
        //     // localStorage.setItem('favorites', JSON.stringify(favoriteList))

        // } else {
        console.log('fist like');
        setFavoriteList([newFavorite, ...favoriteList])
        localStorage.setItem('favorites', JSON.stringify(favoriteList))
        // }
    }

    const removeFavorite = (id) => {
        console.log('hello', id);
        // setFavoriteList(favoriteList.filter((item) => (item.id !== id)))
        // localStorage.setItem('favorites', JSON.stringify(favoriteList))
    }

    // console.log(favoriteList);




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
                    <h3>Search</h3>
                    <div className="search-nav">

                        <input placeholder='Search' className='side-nav-search' />
                        <p><FaSearch /></p>
                    </div>

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

                    {categoryName === 'tech' ? null : (
                        <div className="gender-images">

                            <div className="gender-img" data-aos='fade-right' data-aos-delay='70'>
                                <Link to={`/category/${categoryName}?gender=men`}>
                                    <img src={images[5]} alt="" className='main-image' />
                                </Link>
                                <h5>MEN</h5>
                            </div>
                            <div className="gender-img" data-aos='fade-left' data-aos-delay='150'>
                                <Link to={`/category/${categoryName}?gender=women`}>
                                    <img src={images[6]} alt="" className='main-image' />
                                </Link>
                                <h5>WOMEN</h5>
                            </div>
                        </div>
                    )}


                    <hr />

                    <h2>{subcategoryTitle.toUpperCase()} </h2>

                    <div className="category-products">
                        {products && products.length > 0 ? (
                            products.map((product) => (
                                < CategoryItem product={product} key={product.id} addToFavorites={addToFavorites} removeFavorite={removeFavorite} />
                            ))
                        ) : <></>}

                    </div>
                </div>

            </div>
        </>

    )
}

export default CategoryContent