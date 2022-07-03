import './pagecss/CreateProduct.css'
import './pagecss/Profile.css'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { reset, editProduct } from '../features/product/productSlice'
import { toast } from 'react-toastify'
import Header from '../components/layouts/Header'
import SideNav from '../components/layouts/SideNav'
import Spinner from '../components/shared/Spinner'

function EditProduct() {
    const { product, isLoading, isError, isSuccess, message } = useSelector((state) => state.products)

    const [formData, setFormData] = useState({
        title: product.title,
        price: product.price,
        image: product.imgUrl,
        description: product.description
    })

    const { id } = useParams()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { title, price, image, description } = formData


    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            toast.success('success updating')
            dispatch(reset())
            navigate(`/product/${id}`)

        }

    }, [isError, message, isSuccess, dispatch, navigate, id])

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(editProduct({ title, price, image, description, id }))

    }


    const onChange = (e) => {
        setFormData((prevState) => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <Header linkcolor='#fff' bgcolor='#181818' />
            <div className="profile" >

                <div className="sidenav">
                    <SideNav />
                </div>
                <div className="content">
                    <h1 className='heading-profile'>Sell an item</h1>
                    <div className='create-product'>
                        <form onSubmit={onSubmit}>
                            <div className="product-form-group">
                                <input className='' type="text" name='title' id='title' placeholder='Enter product name' value={title} onChange={onChange} />
                            </div>
                            {/* <div className="form-group">
                  <label for="cars">Categories</label>
                  <select name="categories" id="categories">
                      <option value="volvo">Shoes</option>
                      <option value="saab">Tech</option>
                      <option value="mercedes">Clothing</option>
                  </select>


              </div> */}
                            <div className="product-form-group">
                                <input className='' type="text" name='price' id='price' placeholder='Enter price' value={price} onChange={onChange} />
                            </div>
                            <div className="product-form-group">
                                <input className='' type="text" name='description' id='description' placeholder='Enter product description' value={description} onChange={onChange} />
                            </div>
                            <div className="product-form-group">
                                <input className='' type="text" name='image' id='image' placeholder='Enter product description' value={image} onChange={onChange} />
                            </div>
                            {/* <div className="file">
                  <input className='' type="file" name='image' id='image' />
              </div> */}
                            <br />
                            <button className='signupbtn'>Update</button>
                        </form>
                    </div>
                </div >
            </div >
        </>


    )
}

export default EditProduct