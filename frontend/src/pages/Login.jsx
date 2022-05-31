import { useState } from 'react'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    return (
        <>
            <h1>Welcome Back!</h1>
            <form>
                <div className="form-group">
                    <input className='emailInput' type="text" name='email' id='email' placeholder='Enter your email' />
                </div>
                <div className="form-group">
                    <input className='emailInput' type="text" name='email' id='email' placeholder='Enter your email' />
                </div>

            </form>
        </>
    )
}

export default Login