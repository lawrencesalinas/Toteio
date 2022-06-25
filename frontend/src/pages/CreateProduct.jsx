import './pagecss/CreateProduct.css'
import './pagecss/Profile.css'
import axios from 'axios'
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

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [uploading, setUploading] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {

        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            console.log('this is user SELLL', isSuccess);
            dispatch(reset())
            toast.success('success')
            navigate('/my-products')
        }
        dispatch(reset())

    }, [isError, isSuccess, navigate, message, dispatch])

    const uploadFileHandler = async (e) => {
        console.log('i am uploading');
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }

            const { data } = await axios.post('http://localhost:8000/api/uploads', formData, config)

            setImage(data)
            console.log(data, 'setimage');
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createProduct({ title, price, description, image }))
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
                            <input className='' type="text" name='title' id='title' placeholder='Enter product name' value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="product-form-group">
                            <input className='' type="text" name='price' id='price' placeholder='Enter price' value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="product-form-group">
                            <input className='' type="text" name='description' id='description' placeholder='Enter product description' value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        {/* <div className="category-form-gruop">
                            <label for="cars">Categories</label>
                            <select name="categories" id="categories">
                                <option value="volvo">Shoes</option>
                                <option value="saab">Tech</option>
                                <option value="mercedes">Clothing</option>
                            </select>
                        </div> */}


                        <div className="product-form-group">
                            <label>Image</label>
                            <input
                                type='text'
                                name='image'
                                placeholder='Enter image url'
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <input
                                name='file'
                                id='file'
                                type='file'
                                onChange={uploadFileHandler}
                            />
                            {uploading && <Spinner />}
                        </div>
                        {/* <div className="product-form-group">
                            <input className='' type="text" name='image' id='image' placeholder='uoload image' value={image} onChange={onChange} />
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