import './pagecss/CreateProduct.css'
import './pagecss/Profile.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { createProduct, reset } from '../features/product/productSlice'
import { toast } from 'react-toastify'
import Header from '../components/layouts/Header'
import SideNav from '../components/layouts/SideNav'
import Spinner from "../components/shared/Spinner"


function CreateProduct() {
    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.products)


    const [formData, setFormData] = useState({
        title: '',
        price: '',
        image: '',
        description: ''
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { title, price, image, description } = formData

    useEffect(() => {

        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            console.log('this is user SELLL', isSuccess);
            dispatch(reset())
            toast.success('success')
            navigate('/profile')
        }
        dispatch(reset())

    }, [isError, isSuccess, navigate, message, dispatch])

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createProduct({ title, price, image, description }))
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

        <div className="profile" >
            <Header linkcolor='#181818' />
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
                        <button className='signupbtn'>List</button>
                    </form>
                </div>
            </div >
        </div >

    )
}

export default CreateProduct