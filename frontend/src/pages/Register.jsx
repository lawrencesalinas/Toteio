import "./pagecss/Register.css"
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import { Link, useNavigate } from "react-router-dom"
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import Spinner from "../components/shared/Spinner"

function Register() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { name, email, password, confirmPassword } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        // Redirect when logged in
        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    }, [isError, isSuccess, user, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }

    const onSubmit = (e) => {
        console.log('hello');
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error('passwords do not match')
        } else {
            const userData = {
                name,
                email,
                password
            }
            dispatch(register(userData))
        }
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="Register" data-aos='fade-in' >
            <h1>Create Account</h1>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input className='nameInput' type="text" name='name' id='name' value={name} placeholder='Enter your name' onChange={onChange} required />
                </div>
                <div className="form-group">
                    <input className='emailInput' type="email" name='email' id='email' value={email} placeholder='Enter your email' onChange={onChange} required />
                </div>
                <div className="form-group">
                    <input className='passwordInput' type={showPassword ? 'text' : 'password'} name='password' id='password' value={password} placeholder='Enter your password' onChange={onChange} required />
                </div>
                <div className="form-group">
                    <input className='passwordConfirmInput' type={showPassword ? 'text' : 'password'} name='confirmPassword' id='confirmPassword' value={confirmPassword} placeholder='Confirm password' onChange={onChange} required />
                </div>
                <div className="signupbtns">
                    <div className="signuphead">
                        <button className="signupbtn">SIGN UP {" "}</button>
                    </div>

                    <h4 className='or'><span>OR</span></h4>

                    <div className="signuphead">
                        <Link to='/login'>
                            <button className="create-act-btn">SIGN IN</button>
                        </Link>
                    </div>
                    {/* OAtuh */}
                </div>
            </form>



        </div>
    )
}

export default Register