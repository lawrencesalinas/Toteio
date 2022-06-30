import { Link } from 'react-router-dom'
import { FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import '../componentcss/Header.css'



function Header({ linkcolor }) {
    const { user } = useSelector((state) => state.auth)
    return (

        <header className='header' data-aos='fade-in'>
            <div className="logo">
                <Link to='/' style={{ color: linkcolor }}>Tote.io</Link>
            </div>
            <div>
                <ul data-aos='fade-in' >
                    {user ? (
                        <>
                            <li>
                                <Link to='/profile' style={{ color: linkcolor }}><FaUser /></Link>
                            </li>
                            <li>
                                <Link to='/profile' style={{ color: '#ff7b7b' }}><FaHeart /></Link>
                            </li>
                            <li>
                                <Link to='/cart' style={{ color: linkcolor }} ><FaShoppingBag /></Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to='/login'>              <FaUser /></Link>
                            </li>
                            <li>
                                <Link to='/cart'>              <FaShoppingBag /></Link>
                            </li>
                        </>)
                    }

                </ul>
            </div>
        </header>
    )
}

export default Header