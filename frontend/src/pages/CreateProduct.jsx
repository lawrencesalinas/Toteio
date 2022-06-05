import './pagecss/CreateProduct.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { CreateProduct } from '../features/product/productSlice'

function CreateProduct() {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        imgUrl: '',
        description: ''
    })

    const { title, price, imgUrl, description } = formData

    useEffect(() => {

    })

    const onSubmit = (e) => {
        e.preventDefault()
    }


    const onChange = (e) => {
        setFormData((prevState) => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }

    return (
        <div className="create-product">
            <h2>Create Product</h2>
            <form className='form'>
                <div className="form-group">
                    <input className='' type="text" name='title' id='title' placeholder='Enter product name' value={title} onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className='' type="number" name='price' id='price' placeholder='Enter your email' value={price} />
                </div>
                <div className="form-group">
                    <input className='' type="text" name='imgUrl' id='imgUrl' placeholder='Enter your email' value={imgUrl} />
                </div>
                <div className="form-group">
                    <input className='' type="text" name='description' id='description' placeholder='Enter your email' value={description} />
                </div>
                <div className="form-group">
                    <label for="cars">Categories</label>
                    <select name="categories" id="categories">
                        <option value="volvo">Shoes</option>
                        <option value="saab">Tech</option>
                        <option value="mercedes">Clothing</option>

                    </select>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct