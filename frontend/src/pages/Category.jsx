import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/layouts/Header'
import './pagecss/Category.css'
import NavBar from '../components/layouts/NavBar'
import CategoryContent from '../components/products/CategoryContent'
import Spinner from '../components/shared/Spinner'



function Category() {
    const { products, isLoading, isSuccess } = useSelector((state) => state.products)
    const navigate = useNavigate()
    const location = useLocation()

    const shoeImages = [
        "https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1590225629331-a3a5d53f59f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80",
        "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "https://s7d2.scene7.com/is/image/aeo/20220629_W_SHOES_SANDALS_lg?scl=1&qlt=60&fmt=jpeg"
    ]

    const techImages = [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1598178577916-56381827b0fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80",
        "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1639375406309-f068e5a9ad5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ]

    const clothingImages = [
        "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80",
        "https://images.unsplash.com/photo-1546635834-78554e816d55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456&q=80",
        "https://images.unsplash.com/photo-1502868354157-ec2edd2a1651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
        "https://images.unsplash.com/photo-1580997643346-e245056191c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80'
    ]

    const shoePageText = ['Find your perfect pair.']
    const techPageText = ['Find your perfect gadgets.']
    const clothingPageText = ['Show off your style.']

    const dispatch = useDispatch()

    // clear sttate on unmount
    // useEffect(() => {
    //     return () => {
    //         if (isSuccess) {
    //             dispatch(reset())
    //         }
    //     }
    // }, [isSuccess, dispatch])

    // useEffect(() => {
    //     // dispatch(getAdminProducts())
    // }, [dispatch])


    //--------check if route matches---//
    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return true
        }
    }

    const path = location.pathname.slice(10).toUpperCase()


    const changeHeading = (route) => {
        if (route === location.pathname) {
            return route.slice(10).toUpperCase()
        }
    }



    return (
        <div className="category">
            <Header linkcolor='#fff' bgcolor='#181818' />
            <NavBar />


            {pathMatchRoute('/category/shoes') ? (
                <>
                    <CategoryContent

                        categoryText={shoePageText}
                        changeHeading={changeHeading}
                        images={shoeImages}

                        location={location}
                        pathMatchRoute={pathMatchRoute}

                    />
                </>
            ) : (
                pathMatchRoute('/category/tech')
            ) ? (
                <>
                    <CategoryContent
                        categoryText={techPageText}
                        changeHeading={changeHeading}
                        images={techImages}

                        location={location}
                        pathMatchRoute={pathMatchRoute}
                    />
                </>) :
                <>
                    <CategoryContent
                        categoryText={clothingPageText}
                        changeHeading={changeHeading}
                        images={clothingImages}

                        location={location}
                        pathMatchRoute={pathMatchRoute}
                    />
                </>
            }











            {/* {pathMatchRoute('/category/shoes') ? (
                <>
                    <div className="header-images">
                        <img src="https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                        <img src="https://images.unsplash.com/photo-1590225629331-a3a5d53f59f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80" alt="" />
                        <img src="https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                        <img src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                    </div></>
            ) : (
                pathMatchRoute('/category/tech')
            ) ? (
                <>
                    <div className="header-images">
                        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                        <img src="https://images.unsplash.com/photo-1598178577916-56381827b0fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80" alt="" />
                        <img src="https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                        <img src="https://images.unsplash.com/photo-1639375406309-f068e5a9ad5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="" />
                    </div>
                </>) :
                <>

                    <div className="header-images">
                        <img src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80" alt="" />
                        <img src="https://images.unsplash.com/photo-1546635834-78554e816d55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456&q=80" alt="" />
                        <img src="https://images.unsplash.com/photo-1502868354157-ec2edd2a1651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80" alt="" />
                        <img src="https://images.unsplash.com/photo-1580997643346-e245056191c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                    </div>
                </>
            }
            <div className="category-header-container">
                <h2 className='category-header'>{changeHeading(location.pathname)}</h2>
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

                    <div className="image-banner-header">

                        {pathMatchRoute('/category/shoes') ? (
                            <>
                                <h2 className='content-header'>Find your perfect pair.</h2>
                                <img className='image-banner' src="https://s7d2.scene7.com/is/image/aeo/20220629_W_SHOES_SANDALS_lg?scl=1&qlt=60&fmt=jpeg" alt="" />
                            </>
                        ) : (
                            pathMatchRoute('/category/tech')
                        ) ? (
                            <>
                                <h2 className='content-header'>Find your perfect gadgets.</h2>
                                <img className='image-banner' src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                            </>) :
                            <>
                                <h2 className='content-header'>Show off your style.</h2>
                                <img className='image-banner' src='https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80' alt="" />
                            </>
                        }


                    </div>


                    <div className="category-products">
                        {products.map((product) => (
                            <CategoryItem product={product} key={product.id} />
                        ))}

                    </div>
                </div>

            </div> */}
        </div>
    )
}

export default Category