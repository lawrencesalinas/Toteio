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
    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [image4, setImage4] = useState('')
    const [formImage1, setFormImage1] = useState('')
    const [formImage2, setFormImage2] = useState('')
    const [formImage3, setFormImage3] = useState('')
    const [formImage4, setFormImage4] = useState('')


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
        const formData = new FormData()

        for (let i = 0; i < e.target.files.length; i++) {
            formData.append("image", e.target.files[i]);
        }
        formData.append('apiUrl', apiUrl)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }

            const { data } = await axios.post(`${apiUrl}/api/uploads`, formData, config)

            setFormImage1(`${apiUrl}/${data[0]}`)
            setFormImage2(`${apiUrl}/${data[1]}`)
            setFormImage3(`${apiUrl}/${data[2]}`)
            setFormImage4(`${apiUrl}/${data[3]}`)
            setImage1(`${apiUrl}/${data[0]}`)
            setImage2(`${apiUrl}/${data[1]}`)
            setImage3(`${apiUrl}/${data[2]}`)
            setImage4(`${apiUrl}/${data[3]}`)
        } catch (error) {
            console.error(error)
        }
    }



    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createProduct({ title, condition, brand, price, description, category, image1, image2, image3, image4, gender, }))
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <Header linkcolor='#fff' bgcolor='#181818' />
            <NavBar />

            <div className="profile" >
                {/* <ProfileTopNav /> */}
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
                                <label htmlFor="description">Description</label>
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
                                    <input type="radio" value="clothes" checked={category === 'clothes'} onChange={(e) => setCategory(e.target.value)} />
                                    <label htmlFor="other">Other</label>
                                    <input type="radio" value="other" checked={category === 'other'} onChange={(e) => setCategory(e.target.value)} />
                                </div>
                            </div>
                            {category === 'shoes' || category === 'clothing' ? (
                                <div className="category-form-gruop">
                                    <div className="category-radio">
                                        <label htmlFor="men"> Men</label>
                                        <input type="radio" value="men" checked={gender === 'men'} onChange={(e) => setGender(e.target.value)} />
                                        <label htmlFor="women">Women</label>
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
                                    {formImage1 !== `${apiUrl}/undefined` ? (
                                        <img src={formImage1} alt="" />
                                    ) : null}

                                    {formImage2 !== `${apiUrl}/undefined` ? (
                                        <img src={formImage2} alt="" />
                                    ) : null}

                                    {formImage3 !== `${apiUrl}/undefined` ? (
                                        <img src={formImage3} alt="" />
                                    ) : null}
                                    {formImage4 !== `${apiUrl}/undefined` ? (
                                        <img src={formImage4} alt="" />
                                    ) : null}
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
                            <button className='listbtn'>List</button>
                        </form>
                    </div >
                </div >
            </div >

        </>

    )
}

export default CreateProduct