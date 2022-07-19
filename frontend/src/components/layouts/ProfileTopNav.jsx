import '../componentcss/SideNav.css'
import { FaHome, FaUser, FaSignOutAlt, FaHeadphones } from 'react-icons/fa'
import { MdSell } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'


function ProfileTopNav() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    return (
        <div className="profile-top-nav">
            <ul className="top-links">
                <li>
                    <Link to='/profile'>
                        <h4><FaHome /> </h4>
                    </Link>
                </li>
                <li>
                    <Link to='/profile-settings'>
                        <h4><FaUser /></h4>
                    </Link>
                </li>
                <li>
                    <Link to='/my-products'>
                        <h4><FaHeadphones /></h4>
                    </Link>
                </li>
                <li>
                    <Link to='/create-product'>
                        <h4><MdSell /></h4>
                    </Link>
                </li>
                <li>
                    <h4 onClick={onLogout}><FaSignOutAlt /></h4>
                </li>
            </ul>
        </div>
    )
}

export default ProfileTopNav