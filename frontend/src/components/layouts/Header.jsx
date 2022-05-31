import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { IoCart } from 'react-icons/io5'
import '../componentcss/Header.css'



function Header() {
    return (

        <header className='header'>
            <div className="logo">
                <Link to='/'>E-store</Link>
            </div>
            <ul>
                <li>
                    <Link to='/register'>              <FaUser /></Link>
                </li>
                <li>
                    <Link to='/cart'>              <IoCart /></Link>
                </li>
            </ul>

        </header>
    )
}

export default Header