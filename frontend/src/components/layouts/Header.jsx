import { Link } from 'react-router-dom'
import { FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import '../componentcss/Header.css'




function Header({ linkcolor, bgcolor }) {
    const { user } = useSelector((state) => state.auth)
    return (

        <header className='header' style={{ backgroundColor: bgcolor }}>
            <div className="logo">
                <Link to='/' style={{ color: linkcolor }}>Tote.io</Link>
            </div>

            <div>
                <ul>
                    {user ? (
                        <>
                            <li>
                                <Link to='/profile' style={{ color: linkcolor }}><FaUser /></Link>
                            </li>
                            <li>
                                <Link to='/profile' style={{ color: '#ff7b7b' }}><FaHeart /></Link>
                            </li>
                            <li>
                                <Link to='/cart' style={{ color: '#FFFDD0' }} ><FaShoppingBag /></Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to='/login' style={{ color: linkcolor }}>              <FaUser /></Link>
                            </li>
                            <li>
                                <Link to='/cart' style={{ color: linkcolor }}>              <FaShoppingBag /></Link>
                            </li>
                        </>)
                    }

                </ul>
            </div>
        </header>
    )
}

export default Header