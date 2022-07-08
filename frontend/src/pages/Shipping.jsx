import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/layouts/Header'
import NavBar from '../components/layouts/NavBar'
import './pagecss/Shipping.css'


function Shipping() {
    const [formData, setFormData] = useState({
        address: '',
        city: '',
        postalCode: '',
        country: ''
    })

    const { address, city, postalCode, country } = formData

    const onChange = (e) => {
        setFormData((prevState) => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }

    const onSubmit = (e) => {
        e.preventDefualt()

    }

    return (
        <>
            <div data-aos='fade-in'>
                <Header linkcolor='#fff' bgcolor='#181818' />
                <NavBar />
            </div>
            <div className='Shipping' >

                <h1>Shipping</h1>
                <form className='form' onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input className='emailInput' type="text" name='address' id='address' ue={address} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className='emailInput' type="text" name='city' id='city' value={city} onChange={onChange} required />
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
                        <Link to='/register'>
                            <button className="create-act-btn">Continue</button>
                        </Link>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Shipping