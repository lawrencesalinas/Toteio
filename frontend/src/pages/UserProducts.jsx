import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from '../components/products/ProductItem'
import { getUserProducts, reset } from '../features/product/productSlice'

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
    }, [dispatch])

    console.log(products);

    return (
        <>
            <h1 data-aos='zoom-in'>Tickets</h1>
            <div className="tickets">
                <div className="ticket-headings" data-aos='zoom-in'>
                    <div>Data</div>
                    <div>Product</div>
                    <div>Status</div>
                    <div></div>
                </div>
                <div className="products">
                    {
                        products.map((product, index) => (
                            <ProductItem product={product} key={index} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default UserProducts