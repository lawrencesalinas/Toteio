import './pagecss/CreateProduct.css'
import './pagecss/Profile.css'
import axios from 'axios'
import apiUrl from '../apiConfig'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { createProduct, reset } from '../features/product/productSlice'
import { toast } from 'react-toastify'
import Header from '../components/layouts/Header'
import SideNav from '../components/layouts/SideNav'
import Spinner from "../components/shared/Spinner"
import NavBar from '../components/layouts/NavBar'




function CreateProduct() {
    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.products)
    const { user } = useSelector((state) => state.auth)

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [condition, setCondition] = useState('New')
    const [category, setCategory] = useState('tech')
    const [gender, setGender] = useState('')
    const [brand, setBrand] = useState('')
    const [image, setImage] = useState('')
    const [formImage1, setFormImage1] = useState('')
    const [formImage2, setFormImage2] = useState('')
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
        const formData = new FormData()

        setUploading(true)
        for (let i = 0; i < e.target.files.length; i++) {
            formData.append("image", e.target.files[i]);
        }


        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }

            const { data } = await axios.post(`${apiUrl}/api/uploads`, formData, config)
            console.log(data);
            setFormImage1(`${apiUrl}${data[0]}`)
            setFormImage2(`${apiUrl}${data[1]}`)
            // setFormImage2(`${apiUrl}${data.imageKey}`)
            // setImage(`${apiUrl}${data.imageKey}`)


            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }



    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createProduct({ title, condition, brand, price, description, category, image, gender }))
    }

    console.log(condition);
    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <Header linkcolor='#fff' bgcolor='#181818' />
            <NavBar />
            <div className="profile" >

                <div className="sidenav">
                    <SideNav />
                </div>
                <div className="content">
                    {user.isAdmin ? (
                        <h1 className='heading-profile'>Sell </h1>
                    ) : <h1 className='heading-profile'>Sell your stuff locally</h1>}

                    <div className='create-product'>
                        <form onSubmit={onSubmit}>
                            <div className="product-form-group">
                                <label htmlFor="name">Name</label>
                                <input className='' type="text" name='title' id='title' placeholder='Enter product name' value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="product-form-group">
                                <label htmlFor="price">Price</label>
                                <input className='' type="text" name='price' id='price' placeholder='Enter price' value={price} onChange={(e) => setPrice(e.target.value)} />
                            </div>
                            <div className="product-form-group description">
                                <label htmlFor="cars">Description</label>
                                <textarea className='' type="textarea" name='description' id='description' placeholder='Enter product description' value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>

                            <div className="category-form-gruop">
                                <label htmlFor="category">Category</label>
                                <div className="category-radio">
                                    <label htmlFor="tech"> Tech</label>
                                    <input type="radio" value="tech" checked={category === 'tech'} onChange={(e) => setCategory(e.target.value)} />
                                    <label htmlFor="shoes">Shoes</label>
                                    <input type="radio" value='shoes' checked={category === 'shoes'} onChange={(e) => setCategory(e.target.value)} />
                                    <label htmlFor="clothing">Clothing</label>
                                    <input type="radio" value="clothing" checked={category === 'clothing'} onChange={(e) => setCategory(e.target.value)} />
                                    <label htmlFor="other">Other</label>
                                    <input type="radio" value="other" checked={category === 'other'} onChange={(e) => setCategory(e.target.value)} />
                                </div>
                            </div>
                            {category === 'shoes' || category === 'clothing' ? (
                                <div className="category-form-gruop">
                                    <div className="category-radio">
                                        <label htmlFor="tech"> Men</label>
                                        <input type="radio" value="men" checked={gender === 'men'} onChange={(e) => setGender(e.target.value)} />
                                        <label htmlFor="shoes">Women</label>
                                        <input type="radio" value='women' checked={gender === 'women'} onChange={(e) => setGender(e.target.value)} />

                                    </div>
                                </div>
                            ) : null}
                            <div className="product-form-group">
                                <label htmlFor="brand">Brand</label>
                                <input className='' type="text" name='brand' id='brand' placeholder='Enter product brand' value={brand} onChange={(e) => setBrand(e.target.value)} />
                            </div>

                            <div className="condition-form-gruop">
                                <label htmlFor="condition">Condition</label>
                                <select name="condition" onChange={(e) => {
                                    const selectedCondition = e.target.value
                                    setCondition(selectedCondition)
                                }}>
                                    <option value='New'>New</option>
                                    <option value='Like New'>Like new</option>
                                    <option value='Good'>Good</option>
                                    <option value='Fair'>Fair</option>
                                </select>
                            </div>

                            {formImage1 && formImage1 !== '' ? (
                                <div className="form-image">

                                    <img src={formImage1} alt="" />
                                    <img src={formImage2} alt="" />
                                </div>

                            ) : <></>}

                            <div className="category-form-gruop">
                                <label htmlFor="image upload">Upload image</label>
                                <input className='form-filepicker'
                                    name='file'
                                    id='file'
                                    type='file'
                                    onChange={uploadFileHandler}
                                    multiple
                                />
                            </div>


                            <br />
                            <button className='signupbtn'>List</button>
                        </form>
                    </div >
                </div >
            </div >


            <img src='/api/uploads/image-1658091627726.jpeg' alt="" />

        </>

    )
}

export default CreateProduct