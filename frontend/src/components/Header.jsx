import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { IoCart } from 'react-icons/io5'
import './componentcss/Header.css'



function Header() {
    return (

        <header className='header'>
            <div className="logo">
                <Link to='/'>E-store</Link>
            </div>

            <ul>
                <li>
                    <FaUser />
                </li>
                <li>
                    <IoCart />
                </li>
            </ul>

        </header>
    )
}

export default Header