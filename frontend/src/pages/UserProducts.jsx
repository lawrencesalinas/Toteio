import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from '../components/products/ProductItem'
import { getUserProducts, reset } from '../features/product/productSlice'
import Header from '../components/layouts/Header'
import SideNav from '../components/layouts/SideNav'
import './pagecss/Profile.css'
import Spinner from '../components/shared/Spinner'

function UserProducts() {

    const { products, isLoading, isSuccess } = useSelector((state) => state.products)



    const dispatch = useDispatch()

    // clear sttate on unmount
    useEffect(() => {

        return () => {
            if (isSuccess) {
                dispatch(reset())

            }
        }

    }, [isSuccess, dispatch])

    useEffect(() => {
        dispatch(getUserProducts())
        // console.log(isSuccess);/


    }, [dispatch], isSuccess)

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="profile" >
            <Header linkcolor='#181818' />
            <div className="sidenav">
                <SideNav />
            </div>
            <div className="content">
                {
                    products && products.length > 0 ? (<>
                        <h1 className='heading-profile'>My Products</h1>
                        <div className="user-products">
                            {products.map((product) => (
                                <ProductItem product={product} key={product.id} />
                            ))
                            }
                        </div>
                    </>) : <h1 className='heading-profile'>No Products vailable</h1>
                }

            </div>
        </div>







    )
}

export default UserProducts