import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/layouts/Header'
import NavBar from '../components/layouts/NavBar'
import './pagecss/Shipping.css'
import { createOrder, reset } from '../features/order/orderSlice'
import { useEffect } from 'react'
import Spinner from '../components/shared/Spinner'
import { toast } from 'react-toastify'


function Shipping() {
    const { order, isLoading, isError, isSuccess, message } = useSelector(state => state.orders)

    const [formData, setFormData] = useState({
        address: '',
        city: '',
        postalCode: '',
        state: '',
        country: ''
    })

    const { address, city, postalCode, state, country } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        if (isSuccess) {
            dispatch(reset())
            navigate(`/order/${order[1].id}`)
        }

        if (isError) {
            toast.error(message)
        }

    }, [dispatch, navigate, isSuccess, isError, message])




    console.log(order[1]);

    const onChange = (e) => {
        setFormData((prevState) => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }

    const shippingAddress = `${address} ${city} ${state} ${postalCode} ${country}`

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('working');
        dispatch(createOrder({ shippingAddress: shippingAddress }))
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <div>
                <Header linkcolor='#fff' bgcolor='#181818' />
                <NavBar />
            </div>
            <div className='Shipping' >

                <h1>Shipping</h1>
                <form className='form' onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input className='emailInput' type="text" name='address' id='address' placeholder='street' ue={address} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className='emailInput' type="text" name='city' id='city' placeholder='city' value={city} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className='emailInput' type="text" name='state' id='state' value={state} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postalCode">Postal Code</label>
                        <input className='emailInput' type="text" name='postalCode' id='postalCode' value={postalCode} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input className='emailInput' type="text" name='country' id='country' value={country} onChange={onChange} required />
                    </div>
                    <div className="signuphead">
                        <button className="create-act-btn" type='submit' >Continue</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Shipping