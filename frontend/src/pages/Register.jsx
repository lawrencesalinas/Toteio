import "./pagecss/Register.css"
import { useState } from 'react'
import { FaUserPlus } from 'react-icons/fa'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { name, email, password, confirmPassword } = formData

    const onChange = (e) => {
        setFormData((prevState) => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }


    return (
        <div className="Register">
            <h1>Welcome Back!</h1>
            <form className="form">
                <div className="form-group">
                    <input className='nameInput' type="text" name='name' id='name' value={name} placeholder='Enter your name' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className='emailInput' type="text" name='email' id='email' value={email} placeholder='Enter your email' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className='passwordInput' type="text" name='password' id='password' value={password} placeholder='Enter your password' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className='passwordConfirmInput' type="text" name='passwordConfirm' id='passwordConfirm' value={confirmPassword} placeholder='Confirm password' onChange={onChange} />
                </div>
            </form>
            <div className="signupbtns">
                <div className="signuphead">
                    <p>Sign up</p>
                    <button className="signupbtn"><FaUserPlus /></button>
                </div>
                {/* OAtuh */}
            </div>
        </div>
    )
}

export default Register