import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { reset, getProducts } from '../features/product/productSlice'
import Header from '../components/layouts/Header'
import CategoryItem from '../components/products/CategoryItem'
import './pagecss/Category.css'


function Category() {
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
        dispatch(getProducts())
    }, [dispatch])


    return (
        <div className="category">
            <Header />

            <h1>Shoes</h1>
            <div className="header-images">
                <img src="https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1590225629331-a3a5d53f59f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            </div>

            <div className="category-content">
                <div className="side-nav">
                    <ul>
                        <li>Shoes</li>
                        <li>Tech</li>
                        <li>Clothes</li>
                    </ul>
                </div>
                <div className="category-products">
                    {products.map((product) => (
                        <CategoryItem product={product} key={product.id} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Category