import './pagecss/CreateProduct.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { createProduct, reset } from '../features/product/productSlice'
import { toast } from 'react-toastify'
import Header from '../components/layouts/Header'

// import { CreateProduct } from '../features/product/productSlice'

function CreateProduct() {
    const { user } = useSelector((state) => state.auth)
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
            dispatch(reset())
            navigate('/')
        }

        dispatch(reset())
    }, [dispatch, isError, isSuccess, navigate, message])

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

    return (<>

        <Header />
        <div className="create-product">
            <h2>Create Product</h2>
            <form className='form' onSubmit={onSubmit}>
                <div className="form-group">
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
                <div className="form-group">
                    <input className='' type="text" name='price' id='price' placeholder='Enter price' value={price} onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className='' type="text" name='description' id='description' placeholder='Enter product description' value={description} onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className='' type="text" name='image' id='image' placeholder='Enter product description' value={image} onChange={onChange} />
                </div>
                {/* <div className="file">
                    <input className='' type="file" name='image' id='image' />
                </div> */}
                <button>Create</button>
            </form>
        </div >
    </>
    )
}

export default CreateProduct