import '../componentcss/NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
    console.log();

    return (
        <nav className="nav-bar-container">
            <ul className='nav-bar'>
                <li>
                    Men
                </li>
                <li>
                    Women
                </li>
                <li>
                    <Link to='/category/shoes'>Shoes</Link>
                </li>
                <li>
                    <Link to='/category/tech'>Tech</Link>
                </li>
                <li>
                    <Link to='/category/clothing'>Clothes</Link>
                </li>
            </ul>
            {/* )} */}

        </nav>

    )
}

export default NavBar