import { useEffect, useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'
import { Link } from 'react-router-dom'


function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading, isSuccess, isError, message } = useSelector(state => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            navigate('/')
        }

        dispatch(reset())

    }, [isError, isSuccess, user, message, navigate, dispatch])

    const onChange = (e) => {
        // use input name to change input state
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }


    // --------------------Sign in user------------------------------/
    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }
    // ----------------------------------------------------------------/

    if (isLoading) {
        return 'Loading..'
    }

    const { email, password } = formData
    return (
        <div className='Register' data-aos='fade-in' data-aos-delay='400'>
            <h1>Welcome Back!</h1>
            <form className='form' onSubmit={onSubmit}>
                <div className="form-group">
                    <input className='emailInput' type="email" name='email' id='email' placeholder='Enter your email' value={email} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <input className='emailInput' type="password" name='password' id='password' placeholder='Enter your password' value={password} onChange={onChange} required />
                </div>
                <div className="signupbtns">
                    <div className="signuphead">
                        <button className="signupbtn">SIGN IN</button>
                    </div>
                    {/* OAtuh */}
                </div>

                <h4 className='or'><span>OR</span></h4>

                <div className="signuphead">
                    <Link to='/register'>
                        <button className="create-act-btn">CREATE ACCOUNT</button>
                    </Link>
                </div>

            </form>
        </div>
    )
}

export default Login